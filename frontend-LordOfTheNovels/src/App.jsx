//Components
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"

//Components
import { Layout, Login } from "./pages/index"

import { GlobalStyles } from "./style/GlobalStyles"
import themes from "./style/themes/index"


function App() {
  const  { theme }  = useSelector((rootReducer) => rootReducer.theme)
  
  return (
  <ThemeProvider theme={themes[theme ?? "light"]}>
    <GlobalStyles/>
    <Routes>
      <Route path="/*" element={<Layout />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </ThemeProvider>
  )
}
 
export default App
