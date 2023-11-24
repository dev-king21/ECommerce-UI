import { useState } from "react"
import Form from "../../../../shared/Form"
import { validation } from "./validation"
import Button from "../../../../shared/Button"
import TextInput from "../../../TextInput"
import { useUserProvider } from "../../../../providers/UserProvider"

const InputFields = () => {
  const [loading, setLoading] = useState(false)
  const { userEmail, userPassword, setUserEmail, setUserPassword, login } = useUserProvider()

  const submitInformation = async () => {
    setLoading(true)

    await login()

    setLoading(false)
  }

  return (
    <Form
      onSubmit={async () => {
        submitInformation()
      }}
      validationSchema={validation}
      className="w-full flex flex-col gap-y-[20px] mt-[30px]"
    >
      <div className="flex flex-col">
        <TextInput
          label="Email Address"
          value={userEmail}
          onChange={setUserEmail}
          placeholder="Enter your email"
          id="useremail"
          hookToForm
        />
      </div>
      <div className="flex flex-col">
        <TextInput
          label="Password"
          value={userPassword}
          onChange={setUserPassword}
          placeholder="Enter your password"
          id="userpass"
          hookToForm
        />
      </div>
      <div className="pt-[20px]">
        <Button
          id="info_submit_btn"
          type="submit"
          className={`xl:h-[47px] lg:h-[37.6px] md:h-[28.2px] 
          w-full font-poppins_semibold
          ${
            loading ? "bg-[lightgray] text-[white] cursor-not-allowed" : "bg-[#54B3C3] text-[white]"
          }
          md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]`}
          disabled={loading}
        >
          Login
        </Button>
      </div>
    </Form>
  )
}

export default InputFields
