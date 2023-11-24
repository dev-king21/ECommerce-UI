import JoiBase from "joi"
import { joiPasswordExtendCore } from "joi-password"

const JoiPassword = JoiBase.extend(joiPasswordExtendCore)

const validation = JoiBase.object({
  useremail: JoiBase.string()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": `Please enter a valid email.\nExample: example@email.com`,
      "string.email": `Please enter a valid email.\nExample: example@email.com`,
    }),
  userpass: JoiPassword.string().min(6).messages({
    "string.empty": `Your Password needs to be at least\n6 symbols.`,
    "string.min": `Your Password needs to be at least\n6 symbols.`,
  }),
})

export { validation }
