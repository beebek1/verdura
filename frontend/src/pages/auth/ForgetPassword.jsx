import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'
import { forgotPasswordApi } from '../../services/api'
import LoaderButton from '../../components/BtnCompo';

const ForgetPassword = () => {

    const navigate = useNavigate()
    const [loading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('')

    const handlechange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async(e) =>{
        if(!email){
            return toast.error("enter valid email address")
        }
        setIsLoading(true)
        try{
            const res = await forgotPasswordApi({email : email})
            toast.success(res?.data?.message)
            navigate("/signin")
        }catch(err){
            toast.error(error?.response?.data?.message || "something terribly went wrong");
        }finally{
            setIsLoading(false)
        }
    }

    return (
        <div className="flex h-screen">

            {/* Left Side - Form */}
            <div className="w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md px-8">

                    <h1 className="text-3xl font-bold text-center mb-4">
                        Forgot Password?
                    </h1>
                    <p className="text-center text-gray-500 mb-8">
                        No worries! Enter your email and we'll send you reset instructions
                    </p>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handlechange}
                            className="w-full border border-gray-300 p-3 rounded-md outline-none focus:border-[#174928] focus:ring-1 focus:ring-[#00605a] focus:ring-opacity-20 transition-all"
                        />
                    </div>

                    <LoaderButton 
                        text="Verify" 
                        loadingText="Verifying..." 
                        isLoading={loading} 
                        onClick={handleSubmit} 
                    />

                    <div className="text-center mt-9">
                        <span className="text-gray-600">Remember your password?  </span>
                        <Link to='/signin' className="text-teal-700 hover:underline font-medium">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Side - Background Image */}
            <div className="w-1/2 bg-teal-900 bg-center bg-cover flex items-center justify-center">

            </div>
        </div>
    )
}

export default ForgetPassword