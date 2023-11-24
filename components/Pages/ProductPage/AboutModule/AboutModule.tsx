import useIsMobile from "../../../../hooks/useIsMobile"
import { useProduct } from "../../../../providers/ProductProvider"
import Media from "../../../../shared/Media"
import Loading from "../../../Loading"
import ProductDetail from "../ProductDetail"

const AboutModule = () => {
  const isMobile = useIsMobile()
  const { loading } = useProduct()

  return (
    <div
      className="w-screen relative
      flex items-center justify-center
      pb-[50px] md:pb-0"
    >
      <div
        className="absolute
      md:left-0 md:bottom-[2px]
      right-0 bottom-[30px]"
      >
        <Media
          type="image"
          link={
            isMobile
              ? "/images/ProductDetail/bottom_dot.png"
              : "/images/ProductDetail/d_bottom_dot.png"
          }
          blurLink={
            isMobile
              ? "/images/ProductDetail/bottom_dot.png"
              : "/images/ProductDetail/d_bottom_dot.png"
          }
          containerClasses="xl:w-[187px] xl:h-[69px]
          lg:w-[149.6px] lg:w-[55.2px]
          md:w-[112.2px] md:h-[41.4px]
          w-[70px] h-[109px]"
        />
      </div>
      <div
        className="md:w-[768px] lg:w-[1024px] xl:w-[1280px] w-full
              xl:pt-[70px] lg:pt-[56px] md:pt-[42px]
              xl:pb-[40px] lg:pb-[32px] md:pb-[24px]
              xl:px-[80px] lg:px-[64px] md:px-[48px]
              pt-[25px] px-[20px]
              pb-[205px] samsungS8:pb-[230px] xs:pb-[280px]
              mx-[20px] md:mx-0
              shadow-[0px_8px_8px_2px_#1e6cd826] dark:shadow-[0px_8px_8px_2px_#1B1B1C]
              xl:translate-y-[-185px] md:translate-y-[-148px] md:translate-y-[-111px]
              translate-y-[-50px]
              rounded-[10px] md:rounded-[20px]
              bg-white dark:bg-[#1A2629]
              relative"
      >
        {loading ? (
          <div className="w-full flex justify-center xl:py-[50px] lg:py-[40px] md:py-[30px]">
            <Loading type="spinningBubbles" color="#73b3c2" size={100} />
          </div>
        ) : (
          <ProductDetail />
        )}
      </div>
    </div>
  )
}

export default AboutModule
