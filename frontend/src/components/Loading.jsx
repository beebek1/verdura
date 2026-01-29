import { useNavigate } from "react-router-dom";

export function Loading() {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="flex items-center justify-center min-h-[500px]">
                <div className="text-center max-w-md">
                    <div className="mb-6">
                        <svg className="h-32 w-32 mx-auto" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            {/* Trunk */}
                            <rect x="45" y="60" width="10" height="30" fill="#8B4513" rx="2">
                                <animate attributeName="height" values="0;30" dur="1.5s" repeatCount="indefinite" />
                                <animate attributeName="y" values="90;60" dur="1.5s" repeatCount="indefinite" />
                            </rect>
                            
                            {/* Leaves - Layer 1 (Bottom) */}
                            <circle cx="50" cy="55" r="0" fill="#2d6a4f">
                                <animate attributeName="r" values="0;15;15;0" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
                            </circle>
                            
                            {/* Leaves - Layer 2 (Middle) */}
                            <circle cx="50" cy="45" r="0" fill="#40916c">
                                <animate attributeName="r" values="0;12;12;0" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
                            </circle>
                            
                            {/* Leaves - Layer 3 (Top) */}
                            <circle cx="50" cy="38" r="0" fill="#52b788">
                                <animate attributeName="r" values="0;10;10;0" dur="1.5s" repeatCount="indefinite" begin="0.7s" />
                            </circle>
                        </svg>
                    </div>
                    
                    {/* Loading Text */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">
                        A lot tea to spill
                    </h2>
                    <p className="text-gray-600 mb-6">
                        We couldn't wait to tell you! Just give us a moment...
                    </p>
                </div>
            </div>
        </div>
    );
}


export function BadRequest() {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="flex items-center justify-center min-h-[500px]">
                <div className="text-center max-w-md">
                    <div>
                        <svg className="h-32 w-32 mx-auto mb-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            {/* Pot */}
                            <path d="M 35 70 L 40 90 L 60 90 L 65 70 Z" fill="#8B7355" />
                            
                            {/* Wilting stem */}
                            <path d="M 50 70 Q 45 60 40 50 Q 35 40 35 30" 
                                    fill="none" 
                                    stroke="#6B8E23" 
                                    strokeWidth="3"
                                    strokeLinecap="round">
                                <animate 
                                    attributeName="d" 
                                    values="M 50 70 Q 48 60 47 50 Q 46 40 45 30;
                                            M 50 70 Q 45 60 40 50 Q 35 40 35 30;
                                            M 50 70 Q 48 60 47 50 Q 46 40 45 30" 
                                    dur="2s" 
                                    repeatCount="indefinite" 
                                />
                            </path>
                            
                            {/* Drooping leaf */}
                            <ellipse cx="35" cy="35" rx="8" ry="4" fill="#90B77D" opacity="0.7">
                                <animate attributeName="cy" values="35;40;35" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2s" repeatCount="indefinite" />
                            </ellipse>
                            
                            {/* Falling leaves */}
                            <ellipse cx="40" cy="45" rx="6" ry="3" fill="#90B77D" opacity="0.5">
                                <animate attributeName="cy" values="45;85" dur="3s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.5;0" dur="3s" repeatCount="indefinite" />
                            </ellipse>
                        </svg>
                        
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">
                            Something Went Wrong
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We couldn't complete your request. Let's try replanting this together.
                        </p>
                        <button onClick={() => window.location.reload()} className="cursor-pointer px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function NotFound() {

    const onClickHandler=()=>{
        const navigate = useNavigate();
        navigate('/signin')
    }
    return (
        <div className="min-h-screen bg-gray-50 p-8">
                <div className="min-h-screen bg-white p-8">
                    <div className="flex items-center justify-center min-h-[500px]">
                        <div className="text-center max-w-md">
                            <div className="mb-6">
                                <svg className="h-40 w-40 mx-auto" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                                    {/* Trees */}
                                    <rect x="20" y="70" width="6" height="20" fill="#8B4513" />
                                    <circle cx="23" cy="65" r="12" fill="#2d6a4f" opacity="0.7" />
                                    
                                    <rect x="50" y="65" width="8" height="25" fill="#8B4513" />
                                    <circle cx="54" cy="58" r="15" fill="#40916c" opacity="0.7" />
                                    
                                    <rect x="85" y="70" width="6" height="20" fill="#8B4513" />
                                    <circle cx="88" cy="65" r="12" fill="#52b788" opacity="0.7" />
                                    
                                    {/* Lost person (stick figure) */}
                                    <circle cx="60" cy="45" r="4" fill="#6B7280">
                                        <animate attributeName="cx" values="60;65;60" dur="3s" repeatCount="indefinite" />
                                    </circle>
                                    <line x1="60" y1="49" x2="60" y2="58" stroke="#6B7280" strokeWidth="2">
                                        <animate attributeName="x1" values="60;65;60" dur="3s" repeatCount="indefinite" />
                                        <animate attributeName="x2" values="60;65;60" dur="3s" repeatCount="indefinite" />
                                    </line>
                                    
                                    {/* Question marks floating */}
                                    <text x="70" y="35" fontSize="16" fill="#9CA3AF" opacity="0.6">
                                        ?
                                        <animate attributeName="y" values="35;30;35" dur="2s" repeatCount="indefinite" />
                                    </text>
                                </svg>
                            </div>
                            
                            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                            <h2 className="text-3xl font-bold text-gray-800 mb-3">
                                Lost in the Forest
                            </h2>
                            <p className="text-gray-600 mb-6">
                                This path doesn't exist in our wilderness. Let's guide you back to familiar trails.
                            </p>
                            <button onClick={onClickHandler} className=" cursor-pointer px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                                Return Home
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    )
}