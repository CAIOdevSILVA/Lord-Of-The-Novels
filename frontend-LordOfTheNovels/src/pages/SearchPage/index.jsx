import { useState, useEffect } from "react"
import { BsFillEmojiFrownFill } from "react-icons/bs"

import { Cards, Loader } from "../../components/index"

import { client } from "../../client"
import { useParams } from "react-router-dom"

import * as Styles from "./style"

const SearchPage = () => {
  const { search } = useParams()
  const [loading, setLoading] = useState(false)
  const [searchNovel, setSearchNovel] = useState([])

  const getSearchNovel = async (novel) => {
    const data = await client.fetch(`*[_type == 'novels' && title match '${novel}*' || slug match '${novel}*' ]{
      title,
      slug,
      image,
      feedback[]{
        stars
      },
      chapters[-1],
    }`)

    return data;
  } 

  useEffect(() => {
    setLoading(true)
    getSearchNovel(search)
      .then((response) => {
        setSearchNovel(response)
        setLoading(false)
      })

  }, [search])
  
  if(loading) return <Loader message={"Carregando a busca..."}/>

  return (
    <Styles.Container>
      { searchNovel.length > 0 ? (
        <Cards title={`Resultado da busca por: '${search.toUpperCase()}'`} novels={searchNovel}/>
      ) :(
        <div className="noResults">
          <h1>Resultado da busca por: '{search.toUpperCase()}'</h1>
          <div className="content">
            <h3>Nenhum Resultado encontrado</h3> <BsFillEmojiFrownFill/>
          </div>
        </div>
      )}
    </Styles.Container>
  )
}

export default SearchPage