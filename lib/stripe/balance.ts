import axios from "axios"
import { STRIPE_ORIGIN } from "../const"
import handleTxError from "../handleTxError"

export const retrieveBalance = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `${STRIPE_ORIGIN}balance`,
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
