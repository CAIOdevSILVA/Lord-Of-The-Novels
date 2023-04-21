import * as Styles from "./style"

const Card = ({novel, vertical}) => {
  return (
    <Styles.Container vertical={vertical}>
      <h1>{novel.name}</h1>
    </Styles.Container>
  )
}

export default Card