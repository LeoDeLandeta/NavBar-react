import { useState } from "react";
import { BeakerIcon, Bars3BottomRightIcon,XCircleIcon } from "@heroicons/react/16/solid";

export const Header = () => {
    let Links =[
        {name:'Home', link:'/'},
        {name:'Services', link:'/'},
        {name:'About', link:'/'},
        {name:'Contact', link:'/'},
    ]

    let[isOpen, setisOpen]= useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
        <div className="py-4 px-7 items-center  justify-between
        md:px-10 md:flex bg-white">
            <div className="flex text-2xl cursor-pointer items-center gap-1">
                <BeakerIcon className="w-7 h-7 text-blue-600"/>
                <span className="font-bold">Inscribite</span>
            </div>

            {/* menu icon */}
            <div onClick={()=> setisOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer
            md:hidden">
                {
                    isOpen ?  <XCircleIcon /> :  <Bars3BottomRightIcon  />
                }

            </div>
            {/*nav links */}
            <ul className={`md:flex md:items-center md:pb-0 pb-20 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 mt-10 md:mt-0  transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map(link=>(
                        <li className="md:z-10 font-semibold my-7 md:ml-8">
                            <a href="/">{link.name}</a>
                        </li>
                    ))
                }
                <button className="btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static">Get Started</button>
            </ul>
        </div>
    </div>

  )
}


