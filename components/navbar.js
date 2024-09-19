'use client'
import nextLogo from '@/assets/next-js.svg'
import Image from "next/image";
import { useState } from 'react';

export default function Navbar(){
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <nav className="container relative mx-auto p-5">
            <div className="flex item-center justify-between">
                <div className="flex item-center space-x-20">
                    <Image src={nextLogo} width={50} height={50}></Image>
                    <div className="hidden space-x-8 p-3 lg:flex">
                        <a href='#' className="text-md font-bold hover:text-cyan-400">sample</a>
                        <a href='#' className="text-md font-bold hover:text-cyan-400">sample</a>
                        <a href='#' className="text-md font-bold hover:text-cyan-400">sample</a>
                    </div>
                </div>
                <div className="hidden item-center space-x-10 lg:flex">
                    <button>Login</button>
                    <button className="p-3 text-black bg-white rounded-lg border-2 border-slate-800 hover:text-white hover:bg-slate-800 hover:border-slate-800">Sign Up</button>
                </div>
                <div className='md:hidden'>
                    <button className='text-black' onClick={toggleMenu}>
                        <svg
                            fill='none'
                            stroke='currentcolor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            viewBox='0 0 24 24'
                            className='w-6 h-6'
                        >
                            <path d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen ? (
                    <ul className='flex flex-col justify-center items-center space-y-5 bg-slate-200 mt-5 py-5 lg:hidden'>
                        <li><a href='#' className="text-md font-bold hover:text-cyan-400">sample</a></li>
                        <li><a href='#' className="text-md font-bold hover:text-cyan-400">sample</a></li>
                        <li><a href='#' className="text-md font-bold hover:text-cyan-400">sample</a></li>
                        <li><a href='#' className="text-md font-bold hover:text-cyan-400">Log in</a></li>
                        <li><a href='#' className="text-md font-bold hover:text-cyan-400">Sign up</a></li>
                    </ul>
                    ): null   
            }
        </nav>
    );
}