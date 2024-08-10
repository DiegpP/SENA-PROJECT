import React, { useState } from 'react'
import loginIcons from '../assest/signin.png'
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



const Login = () => {
    const [ showPassword, setShowPassword] = useState(true)
    return (
    <section id='login'>
       <div className='mx-auto container p-4'>
        
            <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcons} alt='login icons'/>
                </div>

                <form className='pt-5'>
                    <div className='grid'>
                        <label>Email :</label>
                        <div className='bg-slate-100 p-2' >
                            <input type='email' placeholder='Ingrese email' className='w-full h-full outline-none bg-transparent'/>
                        </div>
                        
                    </div>

                    <div>
                        <label>Contraseña : </label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input type={showPassword ? "text" : "password"} placeholder='Ingrese contraseña' className='w-full h-full outline-none bg-transparent'/>
                            <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve)=>!preve)}>
                                <span>
                                    {
                                        showPassword ? (
                                            <BsEyeSlashFill />
                                        )
                                        :
                                        (
                                            <IoEyeSharp />
                                        )
                                    }
                                </span>
                            </div>
                        </div>
                        <Link to ={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-gray-600'>
                        Olvide la contraseña
                        </Link>
                    </div>
                    
                    <button className='bg-green-500 hover:bg-green-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-7'>Login</button>
                </form>

                <p className='my-4'>No tienes cuenta? <Link to = {"/sign-up"}>Registrar</Link></p> 
            </div>
        </div> 
    </section>
  )
}

export default Login