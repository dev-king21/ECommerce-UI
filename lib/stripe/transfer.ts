import axios from "axios"
import qs from "qs"
import { STRIPE_ORIGIN } from "../const"
import handleTxError from "../handleTxError"

export const createTransfer = async (body) => {
  try {
    const bodyData = qs.stringify(body)

    const res = await axios({
      method: "post",
      url: `${STRIPE_ORIGIN}transfers`,
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
