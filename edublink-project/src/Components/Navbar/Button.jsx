import React from 'react'

const Button = (props) => {
  return (
    
    <button className="bg-green-600 text-white font-[poppins] h-8 px-8 rounded text-2xl md:ml-8 hover: bg-green-400 duration-500">
        {props.children}
    </button>
        
  )
}


export default Button
