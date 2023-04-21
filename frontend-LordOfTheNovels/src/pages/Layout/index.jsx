import React from 'react'
import { Routes, Route } from "react-router-dom"


//Components
import { Chapter, Novels, HomePage } from "../index"
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
        </Routes>
      </main>
      <Footer/>
    </Styles.Container>
  )
}

export default Layout