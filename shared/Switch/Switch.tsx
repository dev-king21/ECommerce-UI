import { FC, ReactNode, useState, useEffect } from "react"

interface SwitchProps {
  id: string
  onClick?: () => void
  children?: ReactNode
  value?: boolean
}

const Switch: FC<SwitchProps> = ({ onClick, value }) => {
  const [isToggle, setIsToggle] = useState(false)

  useEffect(() => {
    setIsToggle(value)
  }, [value])

  return (
    <div className="flex justify-center w-[45px] h-[20px] cursor-pointer">
      <div
        className="flex items-center bg-[#A3A3AE] dark:bg-[#54B3C3] rounded-full w-full h-[20px] pl-2"
        onClick={onClick}
      >
        <div
          className={`${isToggle ? "translate-x-[calc(100%+3px)]" : "translate-x-[-5px]"} 
              bg-[white] w-[15px] aspect-[1/1] rounded-full 
              transition duration-[300ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]`}
        />
      </div>
    </div>
  )
}

export default Switch
