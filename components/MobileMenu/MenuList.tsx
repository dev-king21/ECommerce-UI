import Link from "next/link"
import Media from "../../shared/Media"
import Popover from "../../shared/Popover"
import LoginButton from "../LoginButton"
import { useTheme } from "../../providers/ThemeProvider"
import Switch from "../../shared/Switch"

const MenuList = () => {
  const { onChangeThemeConfig, themeMode } = useTheme()

  const onToggle = () => {
    onChangeThemeConfig()
  }
  return (
    <Popover id="menu_popover" className="right-[-15px]">
      {() => (
        <Media
          type="image"
          link="/images/Header/Mobile/menu_icon.png"
          blurLink="/images/Header/Mobile/menu_icon.png"
          containerClasses="w-[24px] h-[24px]"
        />
      )}
      {() => (
        <div
          className="min-w-[200px] p-[20px] bg-[#1a2629]
        text-white rounded-[5px]
        font-poppins_semibold
        flex flex-col gap-y-[10px] cursor-pointer"
        >
          <Link href="/home">
            <p>Home</p>
          </Link>
          <Link href="/cart">
            <p>Cart</p>
          </Link>
          <LoginButton
            className="mb-[10px] cursor-pointer
            uppercase rounded-[10px]
            bg-gradient-to-b from-[#24AACB] to-[#7DD3E7]
            w-[94.8px] h-[28.8px]"
          />
          <div className="flex justify-center gap-x-[5px]">
            <p
              className="font-poppins_medium text-[12px] 
            text-[white] dark:text-[white]
            capitalize"
            >
              {themeMode}
            </p>
            <Switch id="theme-selector" onClick={onToggle} value={themeMode === "dark"} />
          </div>
        </div>
      )}
    </Popover>
  )
}
export default MenuList
