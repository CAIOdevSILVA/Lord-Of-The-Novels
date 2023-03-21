import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import store from "../src/redux/store"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>,
          <Route path='/*' element={<App />}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
