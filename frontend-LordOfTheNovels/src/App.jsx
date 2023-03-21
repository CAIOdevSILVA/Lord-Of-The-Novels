//Components
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"

import Home from "./pages/Home/Index"
import Novels from "./pages/Novels/index"
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"

//Dependencies
import { Routes, Route } from "react-router-dom"
import { GlobalStyles } from "./style/GlobalStyles"
import themes from "./style/themes/index"


function App() {
  const  { theme }  = useSelector((rootReducer) => rootReducer.theme)
  
  return (
  <ThemeProvider theme={themes[ theme ?? "light"]}>
    <GlobalStyles/>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/novels" element={<Novels />}/>
      </Routes>
    </main>
    <Footer/>
  </ThemeProvider>
  )
}

export default App
