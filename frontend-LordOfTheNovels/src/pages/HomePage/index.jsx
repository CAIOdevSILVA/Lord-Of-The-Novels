import { useState ,useEffect } from "react"

//Components
import { Aside, Cards, Loader } from "../../components/index"

import * as Styles from "./style"
import { client } from "../../client"


const HomePage = () => {
  const [novelsData, setNovelsData] = useState([])
  const [loading, setLoading] = useState(false)

  const getNovels = async (element) => {
    const novels = await client.fetch(
      `*[_type == "novels"]{
        feedback[]{
          stars
        },
        chapters[-1],
        image,
        slug,
        tags[],
        title,
        indications 
      }`
    );
    return novels;
  };


  useEffect( () => {
    setLoading(true)
    getNovels()
      .then((response) => {
        setNovelsData(response)    
        setLoading(false) 
      })
  }, [])

  if(loading) return <Loader message="Estamos Carregando as Melhores Novels para Você!"/>
  
  const Indications = novelsData.filter((novel) => novel?.indications === true)
  const latestChapters = novelsData.filter((novel) => novel?.chapters)
                                   .sort((a, b) => new Date(b?.chapters?.publishedAt) - new Date(a?.chapters?.publishedAt))   
                                   .slice(0, 12)

  const asideNovels = Indications.slice(0, 8)
  
  return (
    <Styles.Container active={true}>
      <Styles.CardsContainer>
        <Cards title={"Últimos Lançamentos"} novels={latestChapters}/>
        <Cards title={"O Lord Indica"} novels={Indications}/>
      </Styles.CardsContainer>
      <Aside novels={asideNovels}/>
    </Styles.Container>
  )
}

export default HomePage