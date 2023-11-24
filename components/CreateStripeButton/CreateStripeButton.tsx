import { useState } from "react"
import createStripeAccount from "../../lib/createStripeAccount"
import { useUserProvider } from "../../providers/UserProvider"
import Button from "../../shared/Button"
import { createStripeCustomer } from "../../lib/createStripeCustomer"

const CreateStripeButton = () => {
  const { token } = useUserProvider()
  const [isLoading, setIsLoading] = useState(false)

  const create = async () => {
    setIsLoading(true)
    if (!token.stripeCustomerId)
      await createStripeCustomer(
        `${token.name.firstname} ${token.name.lastname}`,
        token?.email,
        token?.id,
      )
    await createStripeAccount(token?.username, token?.id, token?.email)
    setIsLoading(false)
  }
  return (
    <div className="w-full flex flex-col">
      <p
        className="text-white font-poppins text-[20px]
            pb-[20px] text-center"
      >
        You should connect your billing account
        <br />
        with our stripe platform.
      </p>
      <Button
        id="create-stripe"
        className={`cursor-pointer
                font-poppins_semibold text-[14px]
                bg-[#54B3C3] !text-[white]
                !rounded-full self-center
                w-full h-[40px]`}
        onClick={create}
        disabled={isLoading}
      >
        Create Stripe
      </Button>
    </div>
  )
}

export default CreateStripeButton
