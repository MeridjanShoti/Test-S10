import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={}/>
        <Route path="*" element={}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
