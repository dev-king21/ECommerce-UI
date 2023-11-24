import CartPage from "../../components/Pages/CartPage"
import BillingProvider from "../../providers/BillProvider"

const Cart = () => (
  <BillingProvider>
    <CartPage />
  </BillingProvider>
)

export default Cart
