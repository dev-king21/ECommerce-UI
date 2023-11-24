import axios from "axios"
import qs from "qs"
import { STRIPE_ORIGIN } from "../const"
import handleTxError from "../handleTxError"

export const createCustomer = async (req) => {
  try {
    const data = qs.stringify(req)

    const res = await axios({
      method: "post",
      url: `${STRIPE_ORIGIN}customers`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SK}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data,
    })

    return res.data
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export const listCustomer = async (limit) => {
  try {
    const req = {
      limit,
    }

    const data = qs.stringify(req)

    const res = await axios({
      method: "get",
      url: `${STRIPE_ORIGIN}customers`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SK}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data,
    })

    return res.data.data
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export const deleteCustomer = async (id) => {
  try {
    const res = await axios({
      method: "delete",
      url: `${STRIPE_ORIGIN}customers/${id}`,
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
