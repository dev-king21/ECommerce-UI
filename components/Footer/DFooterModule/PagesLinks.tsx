import Link from "next/link"

const PagesLinks = () => (
  <div className="flex flex-col col-span-4">
    <p
      className="text-[#54B3C3] font-poppins_bold 
    md:text-[12px] lg:text-[16px] xl:text-[20px]
    pb-[25px]"
    >
      Pages
    </p>
    <div
      className="flex flex-col text-[#ffffffcc] font-poppins
      xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]
            gap-y-[15px]"
    >
      <Link href="/home">
        <p className="cursor-pointer">Home</p>
      </Link>
      <Link href="/cart">
        <p className="cursor-pointer">Cart</p>
      </Link>
    </div>
  </div>
)

export default PagesLinks
