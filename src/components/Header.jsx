import React from 'react'

const Header = () => {
  const navLink = "font-medium text-white border-b-2 border-pink-400";
  return (
    <div>
      <header className='border-b border-slate-950 mb-4'>
          <nav className='max-w-[60%] m-auto'>
          <ul className='flex justify-around text-gray02 [&>li]:py-2 [&>li]:w-full [&>li]:cursor-pointer'>
            <li className={navLink}>Day</li>
            <li>Week</li>
            <li>Month</li>
            <li>Year</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header