import Media from "../../../../shared/Media"
import useCartData from "../../../../hooks/useCartData"
import Buttons from "../Buttons/Buttons"

const CartCard = ({ data }) => {
  const { imageUri, title, price } = useCartData(data?.productId)

  return (
    <div className="flex justify-center col-span-1">
      <div
        className="flex flex-col items-start
              xl:w-[384px] lg:w-[307.2px] md:w-[230.4px] w-full
              md:py-[9px] lg:py-[12px] xl:py-[15px]
              md:px-[12px] lg:px-[16px] xl:px-[20px] 
              p-[20px]
              rounded-[10px] md:rounded-[10px]
              bg-white dark:bg-[#1A2629]
              shadow-[2px_10px_20px_4px_#54b3c34f] dark:shadow-[2px_10px_20px_4px_#1B1B1C]"
      >
        <div
          className="w-full aspect-[1/1]
        overflow-hidden rounded-[10px] cursor-pointer"
        >
          <Media
            type="image"
            link={imageUri}
            blurLink={imageUri}
            containerClasses="w-full aspect-[1/1] hover:scale-[1.3]
            transition duration-[400ms]"
          />
        </div>
        <p
          className="text-[#484848] dark:text-white
          text-[14px] samsungS8:text-[16px] xs:text-[18px]
          md:text-[12px] lg:text-[16px] xl:text-[20px]
          font-poppins_medium col-span-7
          pt-[20px] pb-[10px]"
        >
          {title}
        </p>
        <p
          className="text-[#484848] dark:text-white
          text-[14px] samsungS8:text-[16px] xs:text-[18px]
          md:text-[12px] lg:text-[16px] xl:text-[20px]
          font-poppins_medium"
        >
          <span className="text-[#B4DCE3]">Quantity:</span> {data?.quantity}
        </p>
        <p
          className="text-[#484848] dark:text-white
          text-[14px] samsungS8:text-[16px] xs:text-[18px]
          md:text-[12px] lg:text-[16px] xl:text-[20px]
          font-poppins_medium"
        >
          <span className="text-[#B4DCE3]">USD Amount:</span> ${price} * {data?.quantity}
        </p>
        <p
          className="text-[#484848] dark:text-white
          text-[14px] samsungS8:text-[16px] xs:text-[18px]
          md:text-[12px] lg:text-[16px] xl:text-[20px]
          font-poppins_medium"
        >
          <span className="text-[#B4DCE3]">Total Amount:</span> $
          {parseFloat(price) * parseFloat(data?.quantity)}
        </p>
        <div
          className="flex-grow flex items-end justify-end w-full
        gap-x-[10px]"
        >
          <Buttons data={data} amount={parseFloat(price) * parseFloat(data?.quantity)} />
        </div>
      </div>
    </div>
  )
}

export default CartCard
