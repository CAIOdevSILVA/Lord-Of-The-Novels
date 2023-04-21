//Components
import { Cards } from "../index"


import { novels } from "../../data"
import * as Styles from "./style"

const Aside = () => {
  return (
    <Styles.Container>
      <Styles.Indications>
        <Cards title={"O Lord Indica"} novels={novels} vertical={true} />
      </Styles.Indications>
    </Styles.Container>
  )
}

export default Aside