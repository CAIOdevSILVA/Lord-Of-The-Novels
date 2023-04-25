import { useParams } from "react-router-dom"

import * as Styles from "./style"

const Novels = () => {
  const { novel } = useParams()

  return (
    <Styles.Container>
     <h1>Novels</h1>
    </Styles.Container>
  )
}

export default Novels