import Layout from "../../Layout"
import HeroModule from "./HeroModule"
import CartList from "./CartList"
import CheckOutModal from "../../CheckOutModal"

const CartPage = () => (
  <Layout type="base">
    <HeroModule />
    <CartList />
    <CheckOutModal />
  </Layout>
)

export default CartPage
