import nextLogo from '@/assets/next-js.svg'
import Image from "next/image";
export default function Navbar(){
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
            </div>
        </nav>
    );
}