import { useState ,useEffect } from "react"

//Components
import { Aside, Cards, Loader } from "../../components/index"

import * as Styles from "./style"
import { client } from "../../client"


const HomePage = () => {
  const [novelsData, setNovelsData] = useState([])
  const [loading, setLoading] = useState(false)

  const getNovels = async () => {
    const novels = await client.fetch('*[_type == "novels"]')
    return novels
  }

  useEffect( () => {
    setLoading(true)
    getNovels()
      .then((response) => {
        setNovelsData(response)    
        setLoading(false) 
      })
  }, [])

  if(loading) return <Loader message="Estamos Carregando as Melhores Novels para Você!"/>
  
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