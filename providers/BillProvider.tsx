import React, { createContext, useContext, useMemo, useState } from "react"
import { loadStripe } from '@stripe/stripe-js' ;
import { useUserProvider } from "./UserProvider";

const BillingContext = createContext(null)

const BillingProvider = ({ children }) => {
  const [isOpenCheckOut, setIsOpenCheckOut] = useState(false)
  const { token } = useUserProvider()
  const [payAmount, setPayAmount] = useState(null)
  const [clientSecret, setClientSecret] = useState(null)
  const [paymentId, setPaymentId] = useState(null)
  
  const appearance = {
    theme: 'stripe',

    variables: {
      colorPrimary: '#0570de',
      colorBackground: "#1a2629",
      colorText: "#73b3c2",
      colorDanger: '#df1b41',
      fontFamily: 'Poppins !important',
      fontSizeBase : '20px',
      borderRadius: '4px',
    }
};
  const stripeAccountId = useMemo(() => {
    return token.stripeAccountId
  }, [token])

  const stripeCustomerId = useMemo(() => {
    return token.stripeCustomerId
  }, [token])

  const stripePromise = useMemo(async () => {
    const promise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK) ;
    return promise
  }, [])

  const options = {
    clientSecret,
    appearance,
  }

  const value = useMemo(
    () => ({ 
      stripePromise,
      isOpenCheckOut,
      setIsOpenCheckOut,
      stripeAccountId,
      stripeCustomerId,
      payAmount,
      setPayAmount,
      clientSecret,
      setClientSecret,
      paymentId,
      setPaymentId,
      options
    }),
    [
      stripePromise,
      isOpenCheckOut,
      setIsOpenCheckOut,
      stripeAccountId,
      stripeCustomerId,
      payAmount,
      setPayAmount,
      clientSecret,
      setClientSecret,
      paymentId,
      setPaymentId,
      options
    ],
  )

  return <BillingContext.Provider value={value}>{children}</BillingContext.Provider>
}

export const useBilling = () => {
  const context = useContext(BillingContext)
  if (!context) {
    throw new Error("useBilling must be used within a BillingProvider")
  }
  return context
}

export default BillingProvider
