import Link from "next/link"

const PagesLinks = () => (
  <div
    className="font-poppins
        text-[11px] samsungS8:text-[12px]
        pb-[20px]"
  >
    <p
      className="text-[#54B3C3] pb-[20px]
            font-poppins_bold 
            text-[16px] samsungS8:text-[18px]"
    >
      Pages
    </p>
    <div className="flex flex-col gap-y-[5px]">
      <Link href="/home">
        <p className="text-[#ffffffcc]">Home</p>
      </Link>
      <Link href="/cart">
        <p className="text-[#ffffffcc]">Cart</p>
      </Link>
    </div>
  </div>
)

export default PagesLinks
