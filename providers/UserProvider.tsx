import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useLocalStorage } from "usehooks-ts"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import { userRegister, userLogin } from "../lib/firebase"
import getUserData from "../lib/firebase/getUserData"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const router = useRouter()
  const [userId, setUserId] = useLocalStorage<any>("userId", "")
  const [token, setUserToken] = useLocalStorage<any>("userToken", "")
  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const initaialize = () => {
    setUserName("")
    setUserPassword("")
    setUserEmail("")
    setFirstName("")
    setLastName("")
    setPhoneNumber("")
  }
  
  const login = async () => {
    const response: any = await userLogin(userEmail, userPassword)
    if(response.error) return

    setUserToken(response)
    setUserId(response.id)
    initaialize()
    router.push('/home')
  }

  const register = async () => {
    const response: any = await userRegister(userName, userPassword, userEmail, firstName, lastName, phoneNumber)

    if(response?.error) {
      return
    }

    setUserId(response)
    initaialize()
    toast.success("Please, check your email box to verify your email")
    router.push('/signin')
  }

  useEffect(() => {
    const init = async () => {
     const response = await getUserData(userId)
     setUserToken(response)
    }

    if (!userId) return

    init()
  }, [userId])

  const value = useMemo(
    () => ({
      userName,
      token,
      setUserName,
      userPassword,
      setUserPassword,
      userId,
      login,
      register,
      userEmail,
      setUserEmail,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      phoneNumber,
      setPhoneNumber
    }),
    [
      token,
      userId,
      login,
      register,
      userName,
      userPassword,
      setUserName,
      setUserPassword,
      userEmail,
      setUserEmail,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      phoneNumber,
      setPhoneNumber
    ],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserProvider = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUserProvider must be used within a UserProvider")
  }
  return context
}

export default UserProvider
