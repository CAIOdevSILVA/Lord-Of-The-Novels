//Components
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"

import { GoogleOAuthProvider } from "@react-oauth/google"

//Components
import { Layout, Register } from "./pages/index"

import { GlobalStyles } from "./style/GlobalStyles"
import themes from "./style/themes/index"


function App() {
  const  { theme }  = useSelector((rootReducer) => rootReducer.theme)
  
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <ThemeProvider theme={themes[theme ?? "light"]}>
        <GlobalStyles/>
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="/login" element={<Register />}/>
        </Routes>
      </ThemeProvider>
    </GoogleOAuthProvider>
  )
}
 
export default App
