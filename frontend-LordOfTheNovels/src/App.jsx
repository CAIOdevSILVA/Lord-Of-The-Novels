//Components
import Home from "./pages/Home/Index"
import Novels from "./pages/Novels/index"
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"

//Dependencies
import { Routes, Route } from "react-router-dom"
import { GlobalStyles } from "./style/GlobalStyles"


function App() {

  return (
  <>
    <GlobalStyles/>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/novels" element={<Novels />}/>
      </Routes>
    </main>
    <Footer/>
  </>
  )
}

export default App
