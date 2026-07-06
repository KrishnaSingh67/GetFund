import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className="bg-blue-950 text-white flex justify-between items-center h-16 px-5" >
        <div className="logo font-bold">Get me a Chai!</div>
        {/* <ul className="flex space-x-4 ml-auto">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Project</li>
             <li>Signup</li>
            <li>Login</li>
        </ul> */}
        <div>
            <Link href={"/login"}>
         <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 '>Login</button>
</Link>
   </div>
    </nav>
  )
}

export default Navbar
