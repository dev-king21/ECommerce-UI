import ReactLoading from "react-loading"

const Loading = ({ type, color, size }) => (
  <ReactLoading type={type} color={color} height={size} width={size} />
)

export default Loading
