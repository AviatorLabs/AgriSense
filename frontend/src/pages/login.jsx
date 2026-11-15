
import React, { useState } from "react";

import landscape from "../assets/agrisense-login-landscape.png"
import {FiSun, FiMail, FiLock, FiEye} from "react-icons/fi";
function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
        
        <div className="flex flex-row min-h-screen ">
            <div className="w-[42%] h-screen bg-cover bg-center relative flex flex-col justify-center p-12"style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${landscape})`
                    }}>
                 <div className="absolute inset-0 flex items-center justify-center px-10">
                     <div className="max-w-lg text-white">
                        <span className="inline-block bg-white/20 border-white/30 rounded-full px-4 py-2 mb-7 text-sm">Agriculture intelligence for every season</span>
                            <h1 className="text-5xl font-bold leading-tight mb-6">Your Farm. Your Future. Smarter Decisions 
                            
                            </h1>
                            <p className="text-lg leading-relaxed text-white/90">Bring environmental data, soil intelligence, crop guidance, and market signals into every decision you make.</p>

                       </div>
                       </div>
                 
                 <div className="absolute bottom-10 left-10 right-10">
                   <div className="flex items-end gap-2 mb-5">
                    <div className="w-3 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-5 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-7 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-10 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-14 bg-yellow-500 rounded-full"></div>
                    <div className="w-36 h-1 bg-yellow-400"></div>
                    
                   </div>
                   <div className="flex items-center gap-3 mt-4">
                        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                            <FiSun />
                           
                        </div>
                         <p className="text-white/80 text-sm ">Field intelligence, grounded in your land.</p>
                    </div>
          </div> 
          </div>
         <div className="w-[58%] min-h-screen bg-gray-50 flex flex-col items-center justify-center px-12 py-10">

            <h2 className="text-xl text-green-500 font-bold mb-3" >Welcome Back</h2>
            <h1 className="text-4xl text-[#174D73] font-semibold mb-3">Sign in to your farm intelligence platform</h1>
            <p className="text-sm text-gray-500 mb-6 text-center max-w-md" >use your AgriSense account to access your field data, crop recommendations, and market outlook.</p>
            
           
                <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-gray-200 p-8">

                    <form className="w-full flex flex-col">
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-gray-700 font-bold" htmlFor="email" required>Email address</label>
                            <span className="text-gray-500 text-sm">Required</span>
                        </div>
                        <div className="relative">
                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2  text-grey-500 text-lg" />
                            <input className="w-full pl-11 pr-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none" type="email" id="email" placeholder="name@farm.com" required />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-gray-700 font-bold" htmlFor="password" required>Password</label>
                            <a href="#" className="text-blue-600 text-blue-600 font-bold mt-2 mb-4 hover:underline">Forgot your password?</a>
                            
                        </div>
                        <div className="relative">
                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2  text-gray-500 text-lg" />
                            <input className="w-full pl-11 pr-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none" type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" required />
                            <FiEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg cursor-pointer" onClick={() => setShowPassword(!showPassword)} />

    
                        </div>
                    </div>
                    
                    <button className=" w-full bg-green-700 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-800 transition duration-300 mt-5"type="submit">
                        Login
                </button>
                <div className="text-center mt-6">

                 <p className="text-sm text-gray-600">
                       Don't have an account?
                   <a href="/register" className="text-green-700 font-bold ml-1 hover:underline">
                         Create an account</a>
    </p>

</div>
            </form>
            </div>

            <footer className="w-full max-w-md mt-8">
                <div className="flex justify-between text-sm text-gray-500">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Contact Us</a>

                </div>
            </footer>
            <div className="border-t border-gray-200 mt-5 pt-5">
                <p className="text-sm text-gray-500 text-center">&copy; 2026 AgriSense. All rights reserved.</p>
     </div>
            </div>
        </div>
        
       

        
       
        </>
        
    );
}

export default Login;