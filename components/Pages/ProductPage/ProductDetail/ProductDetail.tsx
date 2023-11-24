import FadeInWhenVisible from "../../../FadeInWhenVisible"
import Media from "../../../../shared/Media"
import { useProduct } from "../../../../providers/ProductProvider"
import Button from "../../../../shared/Button"

const ProductDetail = () => {
  const { productDetail, addCart } = useProduct()

  return (
    <>
      <FadeInWhenVisible
        className="absolute right-0 
        xl:top-[-180px] lg:top-[-144px] md:top-[-108px]
        hidden md:block"
      >
        <Media
          type="image"
          link={productDetail?.image}
          blurLink={productDetail?.image}
          containerClasses="xl:w-[384px] xl:h-[413px]
            lg:w-[307.2px] lg:h-[330.4px]
            md:w-[230.4px] md:h-[247.8px]
            rounded-[20px] overflow-hidden
            dark:shadow-[0px_4px_10px_4px_#1B1B1C]"
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <p
          className="text-[16px] samsungS8:text-[18px] xs:text-[20px] 
            md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]
            font-poppins_bold text-[#484848] dark:text-white
            leading-[120%] xl:pb-[20px] lg:pb-[16px] md:pb-[12px]"
        >
          ABOUT <br />
          <span className="text-[#73b3c2]">{productDetail?.title}</span>
        </p>
      </FadeInWhenVisible>
      <FadeInWhenVisible className="md:w-[70%]">
        <p
          className="text-[11px] samsungS8:text-[13px] xs:text-[15px]
            md:text-[10.8px] lg:text-[14.4px] xl:text-[18px] 
            md:pt-0 pt-[10px]
            font-poppins text-[#484848] dark:text-white"
        >
          <span className="text-[#73b3c2] font-poppins_bold">Category: </span>{" "}
          {productDetail?.category}
        </p>
        <p
          className="text-[11px] samsungS8:text-[13px] xs:text-[15px]
            md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
            xl:pt-[10px] lg:pt-[8px] md:pt-[6px]
            font-poppins text-[#484848] dark:text-white"
        >
          <span className="text-[#73b3c2] font-poppins_bold">Price: </span> ${productDetail?.price}
        </p>
        <p
          className="text-[11px] samsungS8:text-[13px] xs:text-[15px]
            md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
            xl:pt-[10px] lg:pt-[8px] md:pt-[6px]
            font-poppins text-[#484848] dark:text-white"
        >
          <span className="text-[#73b3c2] font-poppins_bold">Description: </span>{" "}
          {productDetail?.description}
        </p>
        <Button
          id="add-cart"
          className="cursor-pointer
          font-poppins_semibold mt-[20px] text-[14px]
          !rounded-full bg-[#54B3C3]
          lg:w-[120px] aspect-[120/35] w-[90px]"
          onClick={addCart}
        >
          Add Cart
        </Button>
      </FadeInWhenVisible>
      <FadeInWhenVisible
        className="flex justify-center md:hidden
        absolute w-full
        left-0 
        bottom-[-45px] samsungS8:bottom-[-55px] xs:bottom-[-60px]"
      >
        <Media
          type="image"
          link={productDetail?.image}
          blurLink={productDetail?.image}
          containerClasses="xs:w-[300px] xs:h-[322px]
            samsungS8:w-[250px] samsungS8:h-[268.33px]
            w-[220px] h-[236px]
            !rounded-[15px] overflow-hidden
            dark:shadow-[0px_4px_10px_4px_#1B1B1C]
            shadow-[0px_4px_10px_4px_#1e6cd826] "
        />
      </FadeInWhenVisible>
    </>
  )
}

export default ProductDetail
