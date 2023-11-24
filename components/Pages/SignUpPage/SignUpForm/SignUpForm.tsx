import Link from "next/link"
import InputFields from "../InputFields"

const SignUpForm = () => (
  <div
    className="bg-white dark:bg-[#10181A]
        xl:px-[50px] xl:py-[40px]
        lg:px-[40px] lg:py-[32px]
        md:px-[30px] md:py-[24px]
        md:rounded-[12px] lg:rounded-[16px] xl:rounded-[20px]
        font-poppins"
  >
    <p
      className="font-poppins_bold
                dark:text-white
                md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]
                leading-[120%]"
    >
      Register to ECommerce UI
    </p>
    <InputFields />
    <p
      className="dark:text-white text-[#0F1012] text-center
            pt-[30px]"
    >
      Alreay have an account ?{" "}
      <Link href="/signin">
        <span className="text-[#b4dce3] underline cursor-pointer">Login</span>
      </Link>
    </p>
  </div>
)

export default SignUpForm
