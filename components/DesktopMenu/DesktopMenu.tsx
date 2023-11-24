import Link from "next/link"
import DesktopExplore from "../DesktopExplore"
import Switch from "../../shared/Switch"
import { useTheme } from "../../providers/ThemeProvider"
import LoginButton from "../LoginButton"
import { useUserProvider } from "../../providers/UserProvider"

const DesktopMenu = () => {
  const { onChangeThemeConfig, themeMode } = useTheme()
  const { token } = useUserProvider()

  const onToggle = () => {
    onChangeThemeConfig()
  }

  return (
    <div
      className="xl:max-w-[1280px] lg:max-w-[95%] md:max-w-[768px]
          w-full 
          flex justify-between items-center
          font-poppins_medium
          py-[20px]"
    >
      <div
        className="flex items-center 
      xl:gap-x-[60px]
      lg:gap-x-[54px]
      md:gap-x-[36px]"
      >
        <Link href="/">
          <div className="flex items-center gap-x-[10px] cursor-pointer">
            <p
              className="text-[30px]
              uppercase 
              text-[#73B3C2]
              font-poppins_bold"
            >
              ECommerce <span className="text-[#B4DCE3]">UI</span>
            </p>
          </div>
        </Link>
      </div>
      <DesktopExplore />
      <div className="flex justify-center gap-x-[20px] items-center">
        <div className="flex justify-center gap-x-[5px]">
          <p
            className="font-poppins_medium text-[14px]
          text-[#484848] dark:text-[white]
          capitalize"
          >
            {themeMode}
          </p>
          <Switch id="theme-selector" onClick={onToggle} value={themeMode === "dark"} />
        </div>
        {!token && (
          <LoginButton
            className={`border-[1px] border-[#484848] dark:border-white
          cursor-pointer !rounded-[0px] !text-[#484848] dark:!text-white
          md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]
          lg:w-[100px] aspect-[10/3]
          md:w-[75px]`}
          />
        )}
      </div>
    </div>
  )
}

export default DesktopMenu
