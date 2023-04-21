//Components
import { Aside, Cards } from "../../components/index"

import * as Styles from "./style"
import { novels } from "../../data"

const HomePage = () => {
  return (
    <Styles.Container active={true}>
      <Cards title={"Últimos Lançamentos"} novels={novels}/>
      <Aside />
    </Styles.Container>
  )
}

export default HomePage