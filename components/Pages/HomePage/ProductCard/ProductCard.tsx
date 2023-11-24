import { useRouter } from "next/router"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"

const ProductCard = ({ data }) => {
  const router = useRouter()

  return (
    <div
      className="flex flex-col items-start
            p-[15px] md:p-[18px] lg:p-[24px] xl:p-[30px]
            rounded-[10px] md:rounded-[10px]
            bg-white dark:bg-[#1A2629] 
            w-[300px] md:w-full
            shadow-[2px_10px_20px_4px_#54b3c34f] dark:shadow-[2px_10px_20px_4px_#1B1B1C]"
    >
      <div
        className="w-full aspect-[1/1]
      overflow-hidden rounded-[10px] cursor-pointer"
      >
        <Media
          type="image"
          link={data.image}
          blurLink={data.image}
          containerClasses="w-full aspect-[1/1] hover:scale-[1.3]
          transition duration-[400ms]"
        />
      </div>
      <p
        className="text-[#484848] dark:text-white
        text-[14px] samsungS8:text-[16px] xs:text-[18px]
        md:text-[12px] lg:text-[16px] xl:text-[20px]
        font-poppins_medium col-span-7
        py-[20px]"
      >
        {data.title}
      </p>
      <div
        className="flex-grow flex items-end justify-end w-full
      gap-x-[10px]"
      >
        <Button
          id="product-detail"
          className="cursor-pointer
          font-poppins_semibold
          md:text-[14px]
          !rounded-full bg-[#54B3C3]
          lg:w-[120px] aspect-[120/35] w-[90px]"
          onClick={() => router.push(`/product/${data.id}`)}
        >
          Detail
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
