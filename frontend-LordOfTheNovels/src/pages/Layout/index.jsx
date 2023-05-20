import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { client } from "../../client"

//Components
import { 
  Chapter, 
  Novels, 
  HomePage, 
  Library, 
  SearchPage, 
  Browse, 
  NotFound, 
  Resource,
  Contact
} from "../index"

import { Navbar, Footer }  from "../../components/index"

import * as Styles from './style'



const Layout = () => {
  const { pathname } = useLocation()
  const [social, setSocial] = useState(null)

  const getSocialMedias = async() => {
    const data = await client.fetch(`*[_type == 'siteConfig'][0]{
      instagram,
      facebook,
      discord,
      tiktok
    }`)

    return data;
  }

  useEffect(() => {
    getSocialMedias()
      .then((response) => {
        setSocial(response)
      })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return (
    <Styles.Container>
      <Navbar/>
      <main>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/novels/:novel' element={<Novels/>} />
            <Route path='/novels/:novel/:chapter' element={<Chapter/>} />
            <Route path='/library' element={<Library/>} />
            <Route path='/search/:search' element={<SearchPage/>} />
            <Route path='/browse/:category' element={<Browse />} />
            <Route path='/resource/:resource' element={<Resource />}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer social={social}/>
    </Styles.Container>
  )
}

export default Layout