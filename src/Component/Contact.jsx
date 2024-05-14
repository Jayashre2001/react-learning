import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <header className=' bg-black h-14 w-full flex justify-between'>
    <a href="" className=' text-3xl px-5 capitalize text-blue-500'>applute</a>
    <nav className=''>
       <ul className='flex text-blue-500 p-4 capitalize '>
           <li className='px-8'> <NavLink to="/home">home</NavLink></li>
           <li className='px-8'><NavLink to="/about">about</NavLink></li>
           <li className='px-8'> <NavLink to="/service">service</NavLink></li>
           <li className='px-8'> <NavLink to="/contact">contact</NavLink></li>

       </ul>
    </nav>

</header>

<section>
    <h1>contact pages</h1>
</section>
</>
  )
}

export default Contact
