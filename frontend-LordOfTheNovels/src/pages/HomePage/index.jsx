import { useState ,useEffect } from "react"

//Components
import { Aside, Cards } from "../../components/index"

import * as Styles from "./style"
import { client } from "../../client"


const HomePage = () => {
  const [novelsData, setNovelsData] = useState([])

  const getNovels = async () => {
    const novels = await client.fetch('*[_type == "novels"]')
    return novels
  }

  useEffect( () => {
    getNovels()
      .then((response) => {
        setNovelsData(response)
        console.log(response)
        
      })
  }, [])

  return (
    <Styles.Container active={true}>
      <Styles.CardsContainer>
        <Cards title={"Últimos Lançamentos"} novels={novelsData}/>
        <Cards title={"o Lord Indica"} novels={novelsData}/>
      </Styles.CardsContainer>
      <Aside novels={novelsData}/>
    </Styles.Container>
  )
}

export default HomePage