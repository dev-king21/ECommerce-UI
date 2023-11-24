import DFooterLogo from "./DFooterLogo"

const AboutPlatform = () => (
  <div className="flex flex-col col-span-4">
    <DFooterLogo />
    <pre
      className="font-poppins text-[#ffffffcc]
      xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]
      py-[20px]"
    >
      {`Magni dolores eos qui ratione\nvoluptatem sequi nesciunt. Neque\nporro quisquam est, qui dolorem\nipsum quia dolor sit amet, consectetur,\nadipisci velit, sed quia non.`}
    </pre>
  </div>
)

export default AboutPlatform
