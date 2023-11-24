import { ChangeEventHandler, useEffect } from "react"
import { useFormContext } from "react-hook-form"

interface IInput {
  id?: string
  name?: string
  value?: any
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  hookToForm: boolean
  type: "text" | "password" | "url" | "number"
  clasNameError?: string
  disabled?: boolean
}

function Input({
  id,
  name,
  value,
  type = "text",
  placeholder,
  hookToForm,
  onChange,
  className,
  clasNameError,
  disabled,
}: IInput) {
  const formContext = useFormContext()
  const isFullyHooked = name && hookToForm && formContext

  const fieldError = isFullyHooked && formContext?.formState?.errors?.[name]

  useEffect(() => {
    if (name && hookToForm) {
      formContext.setValue(name, value)
    }
  }, [value, name, formContext, hookToForm])

  return (
    <label {...(id && { htmlFor: id })} className={"rounded-md text-sm w-full h-full"}>
      <div className="relative flex items-stretch">
        <input
          {...(id && { id: id })}
          type={type || "text"}
          value={value}
          placeholder={placeholder}
          className={`
          text-black font-madeoutersans
        w-full p-2 border-[1px] border-slate-300
        ${className ? className : ""} ${
            hookToForm && fieldError && fieldError?.message ? clasNameError : ""
          }`}
          {...(!hookToForm && {
            value: value,
            onChange: onChange,
          })}
          {...(isFullyHooked
            ? formContext.register(name, {
                onChange: (e) => onChange && onChange(e),
              })
            : {})}
          name={name}
          disabled={disabled}
        />
      </div>

      {isFullyHooked && fieldError && fieldError?.message && (
        <pre className="text-red-600 font-poppins text-[10px] leading-[120%] pt-[5px]">
          {fieldError?.message as string}
        </pre>
      )}
    </label>
  )
}

Input.defaultProps = {
  hookToForm: false,
  type: "text",
}

export default Input
