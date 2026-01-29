import React, { useState } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import { resetPasswordApi, verifyTokenApi } from '../../services/api';
import { useEffect } from 'react';
import {Loading, BadRequest} from '../../components/Loading';

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const[isVerifying, setIsVerifying] = useState(true)
    const[isTokenValid, setIsTokenValid] = useState(false)
    const [password, setPassword] = useState({
        password : '',
        confirmPassword : ''
    })

    useEffect(()=>{
        const verifyingToken =async()=>{
            try{
                await verifyTokenApi({token : token})
                setIsTokenValid(true)
            }catch(err){
                alert("invalid or expired token")
                console.log("error", err)
                navigate('/signin')
            }finally{
                setIsVerifying(false)
            }
        }

        if(token){
            verifyingToken();
        }else{
            navigate('/signin')
        }
    }, [token, navigate]);

  if (isVerifying) return <Loading></Loading>
  if (!token) return <BadRequest></BadRequest>
    const changeHandler = (e) =>{
        const{ name, value } = e.target;

        setPassword(prev=>({
            ...prev,
            [name] : value
        }))
    }

    const submitHandler = async() =>{
        try{
            if(password.password !== password.confirmPassword){
                return console.log("confirm password didn't match ")
            }
            await resetPasswordApi({token : token, password : password.password})
            navigate('/signin')
        }catch(err){
            console.log("something went wrong", err);
        }
    }

    return (
        <>
            {isTokenValid &&
                <div className="flex h-screen">

                    {/* Left Side - Background */}
                    <div className="w-1/2 bg-teal-900 bg-center bg-cover flex items-center justify-center">

                    </div>

                    {/* Right Side - Form */}
                    <div className="w-1/2 flex items-center justify-center bg-white">
                        <div className="w-full max-w-md px-8">

                            <h1 className="text-3xl font-bold text-center mb-4">
                                Reset Password
                            </h1>
                            <p className="text-center text-gray-500 mb-8">
                                Enter your new password
                            </p>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">
                                    New Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={password.password}
                                        onChange={changeHandler}
                                        placeholder="Enter new password"
                                        className="w-full border border-gray-300 p-3 pr-12 rounded-md outline-none focus:border-[#174928] focus:ring-1 focus:ring-[#00605a] focus:ring-opacity-20 transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        onChange={changeHandler}
                                        value={password.confirmPassword}
                                        placeholder="Confirm new password"
                                        className="w-full border border-gray-300 p-3 pr-12 rounded-md outline-none focus:border-[#174928] focus:ring-1 focus:ring-[#00605a] focus:ring-opacity-20 transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showConfirmPassword ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <button
                                className="cursor-pointer w-full p-3 bg-[#00605a] text-white font-semibold rounded-md hover:bg-teal-900 transition-colors" onClick={submitHandler}
                            >
                                Reset Password
                            </button>

                            <div className="text-center mt-9">
                                <span className="text-gray-600">Remember your password? </span>
                                <Link to='/signin' className="text-teal-700 hover:underline font-medium">
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ResetPassword