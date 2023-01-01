import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import Modal from './modal/Modal'
import { useGlobalContext } from './context'

const App = () => {
  const data = useGlobalContext()
  const showModal = data.state.showModal
  return (
    <>
      {showModal && <Modal />}
      <Navbar />
      <Products />
    </>
  )
}

export default App
