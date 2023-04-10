import React from 'react'
import { Routes, Route } from "react-router-dom"


//Components
import { Chapter, Novels, HomePage } from "../index"
import { Header, Footer }  from "../../components/index"

const Home = () => {

  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/novels' element={<Novels/>} />
          <Route path='/chapter' element={<Chapter/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default Home