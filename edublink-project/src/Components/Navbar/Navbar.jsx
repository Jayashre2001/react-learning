import React from 'react'
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import Button from "./Button"






function Navbar () {
  let Links =[
    {name:"home" ,link:"/"},
    {name:"pages" ,link:"/"},
    {name:"courses" ,link:"/"},
    {name:"blog" ,link:"/"},
    {name:"contact" ,link:"/"},
  ];
    
  return (
    <>
    <div className=" h-12 bg-white flex space-x-80 mt-6 shadow lg ">
                    <img src="https://demo.edublink.co/wp-content/uploads/2023/06/logo-dark.png" alt="" className="pl-20 h-9" />
           <ul className="space-x-3 flex">
            {
              Links.map((Link)=>(
               <li className="capitalize">
                <a href={(Link.link)} className="hover:text-gray-400 duration-500">{(Link.name)}</a>
               </li> 
              ))
            }
           </ul>
           
           <div className=" flex text-2xl space-x-10">
           <CiSearch />
           <CiShoppingCart name='cart' className='cart' />
           <Button >login</Button>
           </div>
           
          
               
        
           
        
          
           
    </div>
    </>
    )
}

export default Navbar
