import { Routes, Route } from "react-router-dom"

//Components
import { Chapter, Novels, HomePage, Library, SearchPage } from "../index"
import { Navbar, Footer }  from "../../components/index"

import * as Styles from './style'



const Layout = () => {
  
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
        </Routes>
      </main>
      <Footer/>
    </Styles.Container>
  )
}

export default Layout