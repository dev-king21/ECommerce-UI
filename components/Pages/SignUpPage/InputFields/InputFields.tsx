import { useState } from "react"
import Form from "../../../../shared/Form"
import { validation } from "./validation"
import Button from "../../../../shared/Button"
import TextInput from "../../../TextInput"
import { useUserProvider } from "../../../../providers/UserProvider"

const InputFields = () => {
  const [loading, setLoading] = useState(false)
  const {
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
    setPhoneNumber,
    register,
  } = useUserProvider()

  const submitInformation = async () => {
    setLoading(true)

    await register()

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
      <div
        className="flex flex-col grid-cols-2 grid
      gap-x-[30px]"
      >
        <TextInput
          label="Email Address"
          value={userEmail}
          onChange={setUserEmail}
          placeholder="Enter your email"
          id="useremail"
          hookToForm
        />
        <TextInput
          label="User Name"
          value={userName}
          onChange={setUserName}
          placeholder="Enter your username"
          id="username"
          hookToForm
        />
      </div>
      <div
        className="flex flex-col grid-cols-2 grid
      gap-x-[30px]"
      >
        <TextInput
          label="Password"
          value={userPassword}
          onChange={setUserPassword}
          placeholder="Enter your password"
          id="userpass"
          hookToForm
        />
        <TextInput
          label="First Name"
          value={firstName}
          onChange={setFirstName}
          placeholder="Enter your first name"
          id="firstname"
          hookToForm
        />
      </div>
      <div
        className="flex flex-col grid-cols-2 grid
      gap-x-[30px]"
      >
        <TextInput
          label="Last Name"
          value={lastName}
          onChange={setLastName}
          placeholder="Enter your last name"
          id="lastname"
          hookToForm
        />
        <TextInput
          label="Phone Number"
          value={phoneNumber}
          onChange={setPhoneNumber}
          placeholder="Enter your phone number"
          id="phonenumber"
          hookToForm
        />
      </div>
      <div className="pt-[20px]">
        <Button
          id="register_btn"
          type="submit"
          className={`xl:h-[47px] lg:h-[37.6px] md:h-[28.2px] 
          w-full font-poppins_semibold
          ${
            loading ? "bg-[lightgray] text-[white] cursor-not-allowed" : "bg-[#54B3C3] text-[white]"
          }
          md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]`}
          disabled={loading}
        >
          Register
        </Button>
      </div>
    </Form>
  )
}

export default InputFields
