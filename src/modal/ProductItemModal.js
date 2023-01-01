import React from 'react'
import { useGlobalContext } from '../context'

const ProductItemModal = ({ name, image, info, price, qty, id }) => {
  const data = useGlobalContext()

  return (
    <>
      <li className='flex flex-col justify-center items-center  w-[300px] md:flex-row py-6 md:w-[500px]'>
        <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
          <img
            src={image}
            alt='Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
            className='h-full w-full object-cover object-center'
          />
        </div>

        <div className='ml-4 flex flex-1 flex-col'>
          <div>
            <div className='flex justify-between text-base font-medium text-gray-900'>
              <h3>
                <a href='#'>{name}</a>
              </h3>
              <p className='ml-4'>${price}</p>
            </div>
          </div>
          <div className='flex flex-1 items-center space-x-5 md:items-end justify-between text-sm'>
            <p className='text-gray-500'>Qty {qty}</p>
            {/* button container */}
            <div className='text-2xl space-x-5 flex text-gray-500'>
              <button onClick={() => data.decrease(id)}>-</button>
              <button onClick={() => data.increase(id)}>+</button>
            </div>
            <div className='flex'>
              <button
                type='button'
                className='font-medium text-red-500'
                onClick={() => data.remove(id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default ProductItemModal
