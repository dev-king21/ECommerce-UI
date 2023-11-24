import { useElements, useStripe, PaymentElement } from "@stripe/react-stripe-js"
import { toast } from "react-toastify"
import { useState } from "react"
import { useBilling } from "../../providers/BillProvider"
import { useProduct } from "../../providers/ProductProvider"
import { removeCart } from "../../lib/firebase"

const CheckOutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const { selectedCart } = useProduct()
  const { clientSecret } = useBilling()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)
    if (!stripe || !elements) return

    await removeCart(selectedCart?.id)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/cart`,
      },
    })

    if (error.type === "card_error" || error.type === "validation_error") toast.error(error.message)
    else toast.error("An unexpected error occurred.")

    setIsLoading(false)
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button
        type="submit"
        disabled={!stripe || !elements || !clientSecret}
        id="submit"
        className={`cursor-pointer mt-[20px]
        font-poppins_semibold text-[14px]
        !rounded-full 
        ${
          isLoading ? "bg-[lightgray] text-[white] cursor-not-allowed" : "bg-[#54B3C3] text-[white]"
        }
        w-full h-[35px]`}
      >
        Pay Now
      </button>
    </form>
  )
}

export default CheckOutForm
