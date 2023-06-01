import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ fixed }) {
  const Navigate = useNavigate()  
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-5">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-blue-500"
            >
              FutureIK
            </a>
          </div>
          <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-blue-500 ms-auto flex cursor-pointer"
            >
                <p onClick={() => Navigate('/')}>Log In</p> / <p onClick={() => Navigate('/register')}>register</p>
             
            </a>
        
        </div>
      </nav>
    </>
  );
}