import { doc, updateDoc } from "firebase/firestore"
import { createAccount, createAccountLink } from "./stripe/account"
import { db } from "./firebase"
import handleTxError from "./handleTxError"

const createStripeAccount = async (username, userId, useremail) => {
  try {
    const reqCreateAccount = {
      type: "standard",
      email: useremail,
      default_currency: "usd",
      "business_profile[url]": "https://ecommerce.ui.com/",
      "business_profile[name]": username,
      business_type: "individual",
    }

    const newStripeAccount = await createAccount(reqCreateAccount)

    if (newStripeAccount?.error) {
      return "create strip account failed"
    }

    await updateDoc(doc(db, "users", userId), {
      stripeAccountId: newStripeAccount.id,
    })

    const reqCreateAccountLink = {
      account: newStripeAccount.id,
      refresh_url: `${window.location.origin}/`,
      return_url: `${window.location.origin}/cart`,
      type: "account_onboarding",
    }

    const resCreateAccountLink = await createAccountLink(reqCreateAccountLink)

    window.open(resCreateAccountLink.url, "_self")

    return true
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default createStripeAccount
