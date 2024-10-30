import React from 'react'

const Navbar = () => {
  return (
    <nav className = 'flex justify-between bg-blue-400 text-white mx-auto py-2'>
    <div className="logo">
        <span className="font-bold text-xl mx-8">TMaster</span>
    </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all '>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
