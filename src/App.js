import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import { useGlobalContext } from './context'

const App = () => {
  return (
    <>
      <Navbar />
      <Products />
    </>
  )
}

export default App
