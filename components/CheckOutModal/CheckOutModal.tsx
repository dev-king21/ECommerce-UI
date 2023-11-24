import { Elements } from "@stripe/react-stripe-js"
import { useBilling } from "../../providers/BillProvider"
import Modal from "../../shared/Modal"
import CreatePayButton from "../CreatePayButton"
import CreateStripeButton from "../CreateStripeButton"
import CheckOutForm from "./CheckOutForm"

const CheckOutModal = () => {
  const {
    isOpenCheckOut,
    setIsOpenCheckOut,
    stripeAccountId,
    clientSecret,
    paymentId,
    options,
    stripePromise,
  } = useBilling()

  return (
    <Modal
      id="checkout_modal"
      isVisible={isOpenCheckOut}
      onClose={() => setIsOpenCheckOut(!isOpenCheckOut)}
      showCloseButton
      containerClassName="rounded-[15px] md:!rounded-[20px] overflow-hidden"
    >
      <div
        className="bg-white dark:bg-[#10181A]
              xl:px-[50px] xl:py-[40px]
              lg:px-[40px] lg:py-[32px]
              md:px-[30px] md:py-[24px]
              font-poppins"
      >
        {!stripeAccountId && <CreateStripeButton />}
        {!clientSecret && stripeAccountId && <CreatePayButton />}
        {clientSecret && stripeAccountId && paymentId && (
          <Elements options={options} stripe={stripePromise}>
            <CheckOutForm />
          </Elements>
        )}
      </div>
    </Modal>
  )
}

export default CheckOutModal
