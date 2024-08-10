import React from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white' >
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
            <Link to="/">
            <Logo w ={70} h ={60}/>
            </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
            <input type='text' placeholder='Buscar' className='w-full outline-none pl-2'></input>
            <div className='text-lg min-w-[50px] h-8 bg-green-600 flex items-center justify-center rounded-r-full text-white'>
                <FaSearch/>
            </div>
        </div>

        <div className='flex items-center gap-5'>
            <div className='text-3xl cursor-pointer'>
                <HiUserCircle />
            </div>

            <div className='text-2xl relative'>
                <span><FaCartShopping /></span>
                <div className='bg-green-700 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-3 -right-3'>
                    <p className='text-sm'>0</p>
                </div>   
            </div>

            <div>
                <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-green-600 hover:hg-green-500'>Login</Link>
            </div>
        </div>
        
    </div>
    
    </header>    
  )
}

export default Header