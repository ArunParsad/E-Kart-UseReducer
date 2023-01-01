import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import logo from './assets/logo.png'
import { useGlobalContext } from './context'

const Navbar = () => {
  const data = useGlobalContext()

  return (
    <>
      <div className=' bg-white py-[10px] w-full'>
        <div className='md:mx-40 mx-20 flex justify-between items-center'>
          <div className='flex justify-center items-center'>
            <img src={logo} alt='logo' className='w-[50px] cursor-pointer' />
            <div className=' text-[#5B5757] ml-[20px] font-bold text-3xl'>
              Kart
            </div>
          </div>
          <button className='relative' onClick={data.modalShow}>
            <div className='bg-[#9FC749] text-white font-bold shadow-md rounded-full w-[30px] h-[30px] flex flex-col justify-center items-center absolute top-[-10px] right-[-10px]'>
              {data.state.amount}
            </div>
            <BsFillCartCheckFill className='text-5xl text-[#5B5757]' />
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
