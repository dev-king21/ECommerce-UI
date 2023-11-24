import { useRouter } from "next/router"
import { useEffect } from "react"
import { useUserProvider } from "../../providers/UserProvider"

const Wrapper = ({ children }) => {
  const { userId } = useUserProvider()

  const router = useRouter()
  const { pathname } = router

  const isSignInPage = pathname.includes("/signin")
  const isSignUpPage = pathname.includes("/signup")
  const isHomePage = pathname.includes("/home")

  const isPublicPage = isSignInPage || isSignUpPage || isHomePage

  useEffect(() => {
    if (!userId && !isPublicPage) {
      router.push("/signin")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isPublicPage, userId])

  return children
}
export default Wrapper
