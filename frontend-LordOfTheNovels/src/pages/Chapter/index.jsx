import { useParams } from "react-router-dom"
import * as Styles from "./style"

const Chapter = () => {
  const { chapter } = useParams()


  return (
    <Styles.Container>
      <h1>Chapter</h1>
    </Styles.Container>
  )
}

export default Chapter