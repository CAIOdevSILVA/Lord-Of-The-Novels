//Components
import { Cards, Categories, Follow } from "../index"

import * as Styles from "./style"


const Aside = ({ novels }) => {
  return (
    <Styles.Container>
      <Styles.Indications>
        <Cards title={"O Lord Indica"} novels={novels} vertical={true} />
      </Styles.Indications>
      <Styles.Categories>
        <Categories size={"auto"} columns={3}/>
      </Styles.Categories>
      <Styles.Follow>
        <Follow />
      </Styles.Follow>
    </Styles.Container>
  )
}

export default Aside