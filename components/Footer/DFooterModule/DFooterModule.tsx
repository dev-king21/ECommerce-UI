import PagesLinks from "./PagesLinks"
import AboutPlatform from "./AboutPlatform"

const DFooterModule = () => (
  <div
    className="w-full
          bg-[#10181A] dark:bg-[#000000]
          flex justify-center py-[100px]"
  >
    <div className="md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
      <div
        className="grid grid-cols-8 border-b-[2px] border-b-white
        pb-[50px]"
      >
        <AboutPlatform />
        <PagesLinks />
      </div>
      <p
        className="font-poppins
        xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]
        text-[#ffffffcc] text-center
        pt-[50px]"
      >
        Copyright @ECommerce UI. All Rights Reserved.
      </p>
    </div>
  </div>
)

export default DFooterModule
