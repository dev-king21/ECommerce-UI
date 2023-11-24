import handleTxError from "./handleTxError"
import { createPaymentIntent } from "./stripe/payment"

const createPayment = async (amount, customerId) => {
  try {
    const data = {
      amount: Number(amount * 100).toFixed(),
      currency: "usd",
      "automatic_payment_methods[enabled]": "true",
      customer: customerId,
      "transfer_data[destination]": process.env.NEXT_PUBLIC_FINANCIAL_ACCOUNT,
      "transfer_data[amount]": Number(amount * 100).toFixed(),
      "metadata[created_at]": new Date().getTime(),
    }

    const response = await createPaymentIntent(data)

    return {
      clientSecret: response?.client_secret,
      paymentId: response?.id,
    }
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default createPayment
