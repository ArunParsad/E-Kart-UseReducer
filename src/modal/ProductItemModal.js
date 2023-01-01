import React from 'react'
import { useGlobalContext } from '../context'

const ProductItemModal = ({ name, image, info, price, qty, id }) => {
  const data = useGlobalContext()

  return (
    <>
      <li class='flex flex-col justify-center items-center  w-[300px] md:flex-row py-6 md:w-[500px]'>
        <div class='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
          <img
            src={image}
            alt='Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
            class='h-full w-full object-cover object-center'
          />
        </div>

        <div class='ml-4 flex flex-1 flex-col'>
          <div>
            <div class='flex justify-between text-base font-medium text-gray-900'>
              <h3>
                <a href='#'>{name}</a>
              </h3>
              <p class='ml-4'>${price}</p>
            </div>
          </div>
          <div class='flex flex-1 items-center space-x-5 md:items-end justify-between text-sm'>
            <p class='text-gray-500'>Qty {qty}</p>
            {/* button container */}
            <div className='text-2xl space-x-5 flex text-gray-500'>
              <button onClick={() => data.decrease(id)}>-</button>
              <button onClick={() => data.increase(id)}>+</button>
            </div>
            <div class='flex'>
              <button
                type='button'
                class='font-medium text-red-600 hover:text-red-500'
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
