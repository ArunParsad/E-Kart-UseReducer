import React from 'react'
import { MdOutlineAddCircle } from 'react-icons/md'
const ProductItem = ({ name, id, price, info, image }) => {
  return (
    <>
      <div className='bg-white w-[250px] md:w-[300px] h-[365px] rounded-2xl overflow-hidden flex flex-col justify-between'>
        <div className='flex items-center justify-center h-[300px] overflow-hidden'>
          <img src={image} alt={name} className='w-[150px]' />
        </div>
        <div className='bg-[#F8F8F8] h-[200px] mt-[-20px] px-[10px] relative'>
          <h2 className='text-xl text-[#5B5757] font-bold pt-[10px]'>{name}</h2>
          <p className='text-sm font-thin max-w-[250px] text-[#5B5757] tracking-wide'>
            {info}
          </p>
          <div className='flex justify-between items-center absolute bottom-2 w-full pr-[20px]'>
            <h2 className='text-[#5B5757] text-2xl font-bold '>${price}</h2>
            <button className='mr-[5px] float-left'>
              <MdOutlineAddCircle className='text-[#9FC749] text-4xl' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
