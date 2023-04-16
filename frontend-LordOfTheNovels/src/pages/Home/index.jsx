import React from 'react'
import { Routes, Route } from "react-router-dom"


//Components
import { Chapter, Novels, HomePage } from "../index"
import { Navbar, Footer }  from "../../components/index"

import * as Styles from './style'

const Home = () => {

  return (
    <Styles.Container>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/novels' element={<Novels/>} />
          <Route path='/chapter' element={<Chapter/>} />
        </Routes>
      </main>
      <Footer/>
    </Styles.Container>
  )
}

export default Home