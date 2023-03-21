import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => {
        navigate("/")
      }}>Voltar</button>
    </div>
  )
}

export default Login