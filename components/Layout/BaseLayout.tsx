import React from "react"
import { ILayout } from "./types"
import Header from "../Header"
import Footer from "../Footer"
import SeoHead from "../SeoHead"

function BaseLayout({ children }: ILayout) {
  return (
    <div
      className="w-screen min-h-screen
      relative
      flex flex-col items-center
      bg-white dark:bg-[#10181A]
      overflow-x-hidden"
    >
      <Header type="base" />
      <SeoHead
        title="ECommerce-UI"
        description="Next.js + React.js + Tailwind CSS"
        image="/images/seo_logo.png"
      />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  )
}

export default BaseLayout
