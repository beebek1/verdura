import React, { useState, useEffect, use } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Verdu from '../../assets/logoInverted.png'
import { verifyEmailApi, verifyTokenApi } from '../../services/api';

const VerifyUser = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState('loading') // 'loading', 'success', 'failed'
    const [message, setMessage] = useState('')

    useEffect(() => {
        const verifyUser = async () => {
            try {
                
                const res = await verifyEmailApi({token})
                setTimeout(() => {
                    if (res.data.success) {
                        setStatus('success');
                    } else {
                        setStatus('failed');
                    }   
                    setMessage(res.data.message);             
                }, 2000)
            } catch (error) {
                setStatus('failed')
                setMessage(error.response.data.message)
            }
        }

        if(token){
            verifyUser()
        }else{
            navigate("/signin")
    }
    }, [])

    return (
        <>
            <div className="flex h-screen">

                {/* Left Side - Background */}
                <div className="w-1/2 bg-teal-900 bg-center bg-cover flex items-center justify-center">

                </div>

                {/* Right Side - Content */}
                <div className="w-1/2 flex flex-col items-center justify-center bg-white px-8">
                    
                    {/* Logo at top */}
                    <div className="mb-12">
                        <img src={Verdu} alt="Verdu Logo" className="h-16" />
                    </div>

                    <div className="w-full max-w-sm text-center">

                        {status === 'loading' && (
                            <>
                                <div className="mb-8">
                                    <div className="inline-block">
                                        <svg className="animate-spin h-16 w-16 text-[#00605a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h1 className="text-2xl font-bold mb-3">
                                    Verifying Your Account
                                </h1>
                                <p className="text-gray-500 text-sm">
                                    Please wait while we verify your account...
                                </p>
                            </>
                        )}

                        {status === 'success' && (
                            <>
                                <div className="mb-8">
                                    <div className="inline-block">
                                        <svg className="h-16 w-16 text-green-500 animate-[scale-in_0.3s_ease-out]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" strokeWidth="2" className="animate-[draw-circle_0.5s_ease-out]" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" className="animate-[draw-check_0.3s_ease-out_0.2s_both]" />
                                        </svg>
                                    </div>
                                </div>
                                <h1 className="text-2xl font-bold mb-3">
                                    Verification Successful!
                                </h1>
                                <p className="text-gray-600 text-sm mb-8">
                                    {message}
                                </p>
                                <Link 
                                    to="/signin" 
                                    className="inline-block px-6 py-3 bg-[#00605a] text-white font-semibold rounded-md hover:bg-teal-900 transition-colors"
                                >
                                    Return to Sign In
                                </Link>
                            </>
                        )}

                        {status === 'failed' && (
                            <>
                                <div className="mb-8">
                                    <div className="inline-block">
                                        <svg className="h-16 w-16 text-red-500 animate-[scale-in_0.3s_ease-out]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9l-6 6m0-6l6 6" />
                                        </svg>
                                    </div>
                                </div>
                                <h1 className="text-2xl font-bold mb-3">
                                    Verification Failed
                                </h1>
                                <p className="text-gray-600 text-sm mb-8">
                                    {message}
                                </p>
                                <Link 
                                    to="/signin" 
                                    className="inline-block px-6 py-3 bg-[#00605a] text-white font-semibold rounded-md hover:bg-teal-900 transition-colors"
                                >
                                    Return to Sign In
                                </Link>
                            </>
                        )}

                    </div>
                </div>

                <style>{`
                    @keyframes scale-in {
                        from {
                            transform: scale(0);
                            opacity: 0;
                        }
                        to {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }
                    
                    @keyframes draw-circle {
                        from {
                            stroke-dasharray: 0 100;
                        }
                        to {
                            stroke-dasharray: 100 0;
                        }
                    }
                    
                    @keyframes draw-check {
                        from {
                            stroke-dasharray: 0 100;
                        }
                        to {
                            stroke-dasharray: 100 0;
                        }
                    }
                `}</style>
            </div>
    </>
    )
}

export default VerifyUser