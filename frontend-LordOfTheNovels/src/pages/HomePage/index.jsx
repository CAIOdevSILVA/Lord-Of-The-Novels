import { useEffect } from "react"

//Components
import { Aside, Cards } from "../../components/index"

import * as Styles from "./style"
import { novels,novelsIndications } from "../../data"

import { client } from "../../client"

const HomePage = () => {
  useEffect(() => {
    getNovels()
  }, [])

  const getNovels = async () => {
    const novels = await client.fetch('*[_type == "novels"]')
    console.log(novels)
    return novels
  }
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