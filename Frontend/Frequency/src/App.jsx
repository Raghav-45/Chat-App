import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import AuthContextProvider from './Contexts/AuthContext'
import AppRouter from './Components/AppRouter'

function App(props) {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  )
}

export default App
