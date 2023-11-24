import { FC } from "react"
import { useRouter } from "next/router"
import Button from "../../shared/Button"

interface LoginButtonProps {
  className?: string
}

const LoginButton: FC<LoginButtonProps> = ({ className }) => {
  const router = useRouter()

  return (
    <Button
      id="login_btn"
      className={className || ""}
      pulseColor="white"
      onClick={() => router.push("/signin")}
    >
      Login
    </Button>
  )
}

export default LoginButton
