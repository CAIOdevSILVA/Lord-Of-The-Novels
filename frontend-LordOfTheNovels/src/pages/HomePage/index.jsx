//Components
import { Aside, Cards } from "../../components/index"

import * as Styles from "./style"
import { novels,novelsIndications } from "../../data"

const HomePage = () => {
  return (
    <Styles.Container active={true}>
      <Styles.CardsContainer>
        <Cards title={"Últimos Lançamentos"} novels={novels}/>
        <Cards title={"o Lord Indica"} novels={novelsIndications}/>
      </Styles.CardsContainer>
      <Aside />
    </Styles.Container>
  )
}

export default HomePage