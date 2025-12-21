import React, { useState } from 'react'
import bird from '../assets/birds.png'
import group from '../assets/Group.png'
import individual from '../assets/individual.png'
import gmail from '../assets/gmail.png'
import github from '../assets/github.png'
import { Eye, EyeOff } from 'lucide-react'



const LoginInd = () => {
    const [showPassword, setShowPassword] = useState(false)
  return (
      /* <img src={bird} alt="text" /> */
   <div className="flex h-screen  ">
    <div
  className="w-1/2 bg-[#1E3A2A] bg-center bg-cover "
  style={{ backgroundImage: `url(${bird})` }}
/>
    <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md px-8">
            <h1 className="text-3xl font-bold text-center mb-4">
                Sign In to Verdura
            </h1>
            <p className="text-center text-gray-500 mb-8">
                Track impact, grow greener, and inspire real change
            </p>
            
            {/* group and individual login buttons */}
            <div className="flex justify-center gap-10 mb-8">
                <button className="flex flex-col items-center text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                        <img src={individual}
                         alt="Individual icon"
                         className='w-5 h-5'
                         />
                        Individual Portal
                    </span>
                    {/* <span className="w-full h-[2px] bg-black mt-1" /> */}
                </button>

                <button className='flex justify-center items-center text-sm text-gray-500'>
                     <span className="flex items-center gap-1">
                        <img src={group}
                         alt="Group icon" 
                         className='w-5 h-5'
                        />
                        Organization Portal
                     </span>  
                </button>
            </div>

            <input type="email" 
            className='w-full border p-3 mt-1 mb-4 outline-none'
            placeholder='Email'
            />

            <div className="relative mb-6">
            <input 
                type={showPassword ? "text" : "password"}
                className='w-full border p-3 mt-1 outline-none pr-10'
                placeholder='**********'
            />
            <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
            </div>

            <p className='text-right'>
                <span className='text-blue-600 cursor-pointer'>Forgot password?</span>
            </p>

            <div className='flex items-center gap-2 mb-6'>
                <input type="checkbox" className='w-4 h-4' />
                <span className=' text-gray-500'>Remember me</span>
            </div>

            <button className='w-full p-3 bg-[#174928] text-white font-italic'>
                Log In
            </button>

            <div className='flex items-center gap-4 my-6'>
                <div className='flex-1 h-px bg-gray-300'></div>
                <div className='text-xs text-gray-500'>Or</div>
                <div className='flex-1 h-px bg-gray-300'></div>
            </div>

            <div className='flex gap-4 justify-center'>
                <button className='flex items-center. gap-2 border px-4 py-2 text-sm'>
                    <span className="flex items-center gap-1">
                        <img src={gmail} 
                        alt="Gmail"
                        className='w-5 h-5'
                         />
                         Sign in with Google
                    </span>
                </button>

                <button className='flex items-center. gap-2 border px-4 py-2 text-sm'>
                    <span className="flex items-center gap-1">
                        <img src={github} 
                        alt="Gmail"
                        className='w-5 h-5'
                         />
                         Sign in with Github
                    </span>
                </button>
            </div>

            <p className='text-center mt-10'>
                New to Verdura?<span className='text-blue-600 cursor-pointer'>Sign Up</span>
            </p>


        </div>
    </div>

   </div>
    
  )
}

export default LoginInd
