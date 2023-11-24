import { useState } from "react"
import { useUserProvider } from "../../providers/UserProvider"
import Button from "../../shared/Button"
import createPayment from "../../lib/createPaymentIntent"
import { useBilling } from "../../providers/BillProvider"

const CreatePayButton = () => {
  const { token } = useUserProvider()
  const { payAmount, setClientSecret, setPaymentId } = useBilling()

  const [isLoading, setIsLoading] = useState(false)

  const purchase = async () => {
    setIsLoading(true)
    const response = await createPayment(payAmount, token?.stripeCustomerId)

    if (response.error) {
      setIsLoading(false)
      return
    }

    setClientSecret(response.clientSecret)
    setPaymentId(response.paymentId)

    setIsLoading(false)
  }

  return (
    <div className="w-full flex flex-col">
      <p
        className="text-white font-poppins text-[20px]
            pb-[20px] text-center"
      >
        You should pay{" "}
        <span className="text-[24px] text-[#54b3c3] font-poppins_bold">${payAmount}</span> to buy
        this product.
      </p>
      <Button
        id="create-stripe"
        className={`cursor-pointer
                font-poppins_semibold text-[14px]
                bg-[#54B3C3] !text-[white]
                !rounded-full self-center
                w-full h-[40px]`}
        onClick={purchase}
        disabled={isLoading}
      >
        Purchase
      </Button>
    </div>
  )
}

export default CreatePayButton
