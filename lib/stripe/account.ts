import axios from "axios"
import qs from "qs"
import { STRIPE_ORIGIN } from "../const"
import handleTxError from "../handleTxError"

export const createAccount = async (req) => {
  try {
    const data = qs.stringify(req)

    const res = await axios({
      method: "post",
      url: `${STRIPE_ORIGIN}accounts`,
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

export const updateAccount = async (id, body) => {
  try {
    const bodyData = qs.stringify(body)

    const res = await axios({
      method: "post",
      url: `${STRIPE_ORIGIN}accounts/${id}`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SK}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: bodyData,
    })

    return res
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export const retrieveAccount = async (id) => {
  try {
    const res = await axios({
      method: "get",
      url: `${STRIPE_ORIGIN}accounts/${id}`,
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

export const createAccountLink = async (body) => {
  try {
    const bodyData = qs.stringify(body)

    const res = await axios({
      method: "post",
      url: `${STRIPE_ORIGIN}account_links`,
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

export const listAccount = async (limit) => {
  try {
    const req = {
      limit,
    }

    const data = qs.stringify(req)

    const res = await axios({
      method: "get",
      url: `${STRIPE_ORIGIN}accounts`,
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
export const deleteAccount = async (id) => {
  try {
    const res = await axios({
      method: "delete",
      url: `${STRIPE_ORIGIN}accounts/${id}`,
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

export const rejectAccount = async (id, req) => {
  try {
    const bodyData = qs.stringify(req)

    const res = await axios({
      method: "post",
      url: `${STRIPE_ORIGIN}accounts/${id}/reject`,
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
