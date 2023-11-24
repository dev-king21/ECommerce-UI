import axios from "axios"
import qs from "qs"
import { STRIPE_ORIGIN } from "../const"
import handleTxError from "../handleTxError"

export const createPaymentIntent = async (body) => {
  try {
    const bodyData = qs.stringify(body)

    const res = await axios({
      method: "post",
      url: `${STRIPE_ORIGIN}payment_intents`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SK}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: bodyData,
    })

    return res.data
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export const retrievePaymentIntent = async (id) => {
  try {
    const res = await axios({
      method: "get",
      url: `${STRIPE_ORIGIN}payment_intents/${id}`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SK}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })

    return res.data
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export const cancelPaymentIntent = async (id) => {
  try {
    const res = await axios({
      method: "post",
      url: `${STRIPE_ORIGIN}payment_intents/${id}/cancel`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SK}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })

    return res.data
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export const retrievePaymentMethod = async (id) => {
  try {
    const res = await axios({
      method: "get",
      url: `${STRIPE_ORIGIN}payment_methods/${id}`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SK}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })

    return res.data
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}
