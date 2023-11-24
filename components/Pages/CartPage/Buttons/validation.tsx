import JoiBase from "joi"

const validation = JoiBase.object({
  quantity: JoiBase.number().min(1).messages({
    "number.min": "Quantity must be greater than or equal to 1",
  }),
})

export { validation }
