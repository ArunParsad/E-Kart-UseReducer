import React from 'react'
import ReactDOM from 'react-dom'
import ProductItemModal from './ProductItemModal'
import { useGlobalContext } from '../context'
import boatHeadphone from '../assets/products/boat-headphone.png'

const Modal = () => {
  const data = useGlobalContext()

  return ReactDOM.createPortal(
    <>
      <div
        className='bg-black w-screen h-screen opacity-50 absolute top-0 left-0'
        onClick={data.modalClose}
      ></div>
      <div className='bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-[95vw] md:w-[50vw] h-[80vh] rounded-lg overflow-auto scrollbar-hide'>
        <div className='flex justify-center flex-col items-center'>
          {data.state.cart.map((product) => {
            return <ProductItemModal {...product} key={product.id} />
          })}
          <div className='text-xl font-bold border px-5 py-2 rounded-full border-solid-500 text-gray-500 mt-10 mb-10'>
            Total: ${data.state.total}
          </div>
        </div>
      </div>
    </>,
    document.getElementById('modal-root')
  )
}

export default Modal
