import Layout from "../../Layout"
import Content from "../../Layout/Content"
import SignInForm from "./SignInForm"

const SignInPage = () => (
  <Layout type="base">
    <div
      className={`dark:bg-[url('/images/Auth/Hero/d_invest_bg.png')]
      bg-[url('/images/Auth/Hero/d_invest_bg.png')]
      flex justify-center items-center
      min-h-screen w-screen pt-[98px]
      bg-[bottom_center]
      bg-cover`}
    >
      <Content>
        <div className="grid grid-cols-12">
          <div className="flex flex-col justify-center gap-y-[40px] col-span-6">
            <pre
              className="xl:text-[64px] lg:text-[51.2px] md:text-[38.4px]
                        font-poppins_bold text-white
                        leading-[130%]"
              data-aos="fade-up"
            >
              {`Welcome To\nECommrce UI`}
            </pre>
          </div>
          <div className="col-span-6">
            <SignInForm />
          </div>
        </div>
      </Content>
    </div>
  </Layout>
)

export default SignInPage
