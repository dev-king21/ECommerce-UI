import Media from "../../../../shared/Media"
import FadeInWhenVisible from "../../../FadeInWhenVisible"
import useIsMobile from "../../../../hooks/useIsMobile"
import { useProduct } from "../../../../providers/ProductProvider"
import CartCard from "../CartCard"
import Loading from "../../../Loading"

const CartList = () => {
  const isMobile = useIsMobile()
  const { carts } = useProduct()

  return (
    <div
      className="w-screen relative
            flex items-center justify-center
            flex-col 
            pb-[50px] md:pb-0"
    >
      <div
        className="absolute
      md:left-0 md:bottom-[2px]
      right-0 bottom-[30px]"
      >
        <Media
          type="image"
          link={isMobile ? "/images/Cart/bottom_dot.png" : "/images/Cart/d_bottom_dot.png"}
          blurLink={isMobile ? "/images/Cart/bottom_dot.png" : "/images/Cart/d_bottom_dot.png"}
          containerClasses="xl:w-[187px] xl:h-[69px]
            lg:w-[149.6px] lg:w-[55.2px]
            md:w-[112.2px] md:h-[41.4px]
            w-[70px] h-[109px]"
        />
      </div>
      <div
        className="md:w-[768px] lg:w-[1024px] xl:w-[1280px]
                md:py-[60px] py-[30px] px-[20px]
                mx-[20px] md:mx-0
                shadow-[0px_8px_8px_2px_#1e6cd826] dark:shadow-[0px_8px_8px_2px_#1B1B1C]
                xl:translate-y-[-120px] md:translate-y-[-96px] md:translate-y-[-72px]
                translate-y-[-50px]
                rounded-[10px] md:rounded-[20px]
                bg-white dark:bg-[#1A2629] relative"
      >
        <FadeInWhenVisible>
          <div
            className="grid grid-cols-1 md:grid-cols-3 
        gap-y-[20px] md:gap-y-[40px]"
          >
            {carts.length ? (
              carts.map((cart) => <CartCard data={cart} key={cart.id} />)
            ) : (
              <div className="col-span-3 flex justify-center xl:py-[50px] lg:py-[40px] md:py-[30px]">
                <Loading type="spinningBubbles" color="#73b3c2" size={100} />
              </div>
            )}
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  )
}

export default CartList
