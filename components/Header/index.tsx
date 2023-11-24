import BaseHeader from "./BaseHeader"

const headerContainers = {
  base: BaseHeader,
}

interface IHeaderFactory {
  type: keyof typeof headerContainers
}

function Header({ type }: IHeaderFactory) {
  const Container = headerContainers[type]

  return <Container />
}

export default Header
