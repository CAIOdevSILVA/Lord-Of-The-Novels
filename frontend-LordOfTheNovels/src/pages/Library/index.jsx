import { useState, useEffect } from 'react'
import { client } from "../../client"
import { fetchUser } from "../../data/index"

import { Loader, Cards } from "../../components/index"

import * as Styles from './style'

const Library = () => {
  const [novelInfo, setNovelInfo] = useState(null)
  const user = fetchUser()

  const getSavedNovels = async (userId) => {
   const data = await client.fetch(`*[_type == 'novels' && '${userId}' in save[].userId ] | order(_createdAt desc){
      feedback[]{
        stars
      },
      chapters[-1],
      image,
      slug,
      tags[],
      title 
    }`)
    return data
  }

  useEffect(() => {
    getSavedNovels(user._id).then((res) => {
      setNovelInfo(res)
    })
  },[])

  if(!novelInfo) return <Loader message={"Estamos carregando as Novels!"}/>

  return (
    <Styles.Container>
        <Cards title={"Sua Biblioteca"} vertical={true} novels={novelInfo}/>
    </Styles.Container>
  )
}

export default Library