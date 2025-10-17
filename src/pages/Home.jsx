import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex flex-col justify-end h-full  space-y-4 p-4 mb-16'>
        <h1 className='text-black font-bold text-[32px]'>Welcome to PopX</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Link to={'/register'}><button className='w-full cursor-pointer font-semibold h-[45px] bg-[#6c25ff] text-white rounded-md'>Create Account</button></Link>
        <Link to={'/login'}><button className='w-full cursor-pointer font-semibold h-[45px] bg-[#cebafb] text-black rounded-md'> Already Registered? Login</button></Link>
    </div>
  )
}

export default Home