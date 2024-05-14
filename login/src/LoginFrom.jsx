import React, { useState } from 'react'
import { CiUser , CiLock } from "react-icons/ci";


const LoginFrom = () => {

  const [userRegistion , setuserRegistion] = useState(
    {
      username: "",
      password: ""

    }
  )
  const handleInput =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name , value);

  }
  return (
    <div className=" border-4 border-black bg-pink-200 place-content-center flex mx-16 my-16 text-white rounded h-80 w-fit">
   <form action="">
    <h1 className='text-3xl capitalize text-center'>login</h1>
    <div className="bg-green-700  w-96 h-12 m-5 rounded">
        <input type="text" placeholder='username' name='username' value={userRegistion.username} onChange={handleInput} className='w-full h-full bg-transparent relative' required />
        <CiUser  className='absolute  left-2/4 top-36 text-black'/>
    </div>
    <div className="bg-green-100  w-96 h-12 m-5 rounded">
        <input type="password" placeholder='***********' name='password' value={userRegistion.password} onChange={handleInput}  className='w-full h-full bg-transparent  relative' required  />
       
        <CiLock className='absolute right-20 top-2/4' />
    </div>
  
    <button type='submit' className='h-7 w-24 border-2 border-solid  ml-6 bg-white text-black rounded'>Register </button>
    
   </form>
    </div>
  )
}

export default LoginFrom
