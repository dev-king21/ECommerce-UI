import { useState } from "react"
import TextInput from "../../../TextInput"
import Form from "../../../../shared/Form"
import { validation } from "./validation"
import Button from "../../../../shared/Button"
import { removeCart, updateQuantity } from "../../../../lib/firebase"
import { useProduct } from "../../../../providers/ProductProvider"
import { useBilling } from "../../../../providers/BillProvider"

const Buttons = ({ data, amount }) => {
  const [quantity, setQuantity] = useState(data?.quantity)
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false)
  const [isRemovingCart, setIsRemovingCart] = useState(false)

  const { getAllCartData, setSelectedCart } = useProduct()
  const { isOpenCheckOut, setIsOpenCheckOut, setPayAmount } = useBilling()

  const updateQuantityAmount = async () => {
    setIsUpdatingQuantity(true)
    await updateQuantity(data?.id, quantity)
    await getAllCartData()
    setIsUpdatingQuantity(false)
  }

  const remove = async () => {
    setIsRemovingCart(true)
    await removeCart(data?.id)
    await getAllCartData()
    setIsRemovingCart(false)
  }

  return (
    <Form
      onSubmit={updateQuantityAmount}
      validationSchema={validation}
      className="w-full flex flex-col gap-y-[20px] mt-[30px]"
    >
      <TextInput
        label="Quantity"
        type="number"
        value={quantity}
        onChange={setQuantity}
        placeholder="Input Quantity Amount"
        id="quantity"
        hookToForm
      />
      <div
        className="w-full flex flex-col  lg:flex-row gap-[10px]
            items-start lg:items-center"
      >
        <Button
          id="product-update"
          type="submit"
          className={`cursor-pointer
                font-poppins_semibold text-[14px]
                ${
                  isUpdatingQuantity
                    ? "bg-[lightgray] text-[white] cursor-not-allowed"
                    : "bg-[#54B3C3] text-[white]"
                }
                !rounded-full
                lg:w-[170px] aspect-[170/35] w-[140px]`}
        >
          Update Quantity
        </Button>
        <Button
          id="product-remove"
          className={`cursor-pointer
                font-poppins_semibold :text-[14px]
                ${
                  isRemovingCart
                    ? "bg-[lightgray] text-[white] cursor-not-allowed"
                    : "bg-[#b50808] text-[white]"
                }
                !rounded-full
                lg:w-[120px] aspect-[120/35] w-[90px]`}
          onClick={remove}
        >
          Remove
        </Button>
      </div>
      <Button
        id="product-checkout"
        className={`cursor-pointer
              font-poppins_semibold :text-[14px]
              bg-[#54B3C3] text-[white]
              !rounded-full
              w-full h-[35px]`}
        onClick={() => {
          setSelectedCart(data)
          setPayAmount(amount)
          setIsOpenCheckOut(!isOpenCheckOut)
        }}
      >
        Checkout
      </Button>
    </Form>
  )
}

export default Buttons
