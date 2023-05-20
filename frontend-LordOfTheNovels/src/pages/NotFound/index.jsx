import { Link } from "react-router-dom"
import { Button } from "../../components/index"

import * as Styles from "./style"

const NotFound = () => {
  return (
    <Styles.Container>
      <h1>A Página não foi encontrada!</h1>
      <Button>
        <Link to={"/"} style={{textDecoration: "none", color:"#f1f5f4"}}>Voltar</Link>
      </Button>
    </Styles.Container>
  )
}

export default NotFound