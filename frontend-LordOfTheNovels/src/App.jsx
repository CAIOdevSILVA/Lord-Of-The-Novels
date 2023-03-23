//Components
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"

import Home from "./pages/Home/Index.jsx"
import Novels from "./pages/Novels/[slug].jsx"
import Header from "./components/Header/index.jsx"
import Footer from "./components/Footer/index.jsx"
import Chapter from "./pages/Chapter/index"

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
        <Route path="/novels/:slug" element={<Novels />}/>
        <Route path="/novels/:slug/:slug" element={<Chapter />}></Route>
      </Routes>
    </main>
    <Footer/>
  </ThemeProvider>
  )
}

export default App
