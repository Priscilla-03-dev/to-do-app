import React from 'react'

const Header = ({ tab, setTab }) => {
  const navLink = "font-medium text-white border-b-2 border-pink-400";
  const inactiveLink = "text-gray-600";
  return (
    <div>
      <header className='border-b border-slate-950 mb-4'>
          <nav className='max-w-[60%] m-auto'>
          <ul className='flex justify-around text-gray-600 [&>li]:py-2 [&>li]:w-full [&>li]:cursor-pointer'>
            <li 
              className={tab === 'day' ? navLink : 'inactiveLink'} 
              onClick={ ()=> setTab('day')}>
              Day
            </li>
            <li 
              className={tab === 'week' ? navLink : 'inactiveLink'} 
              onClick={ ()=> setTab('week')}>
              Week
            </li>
            <li 
              className={tab === 'month' ? navLink : 'inactiveLink'} 
              onClick={ ()=> setTab('month')}>
              Month
            </li>
            <li 
              className={tab === 'year' ? navLink : 'inactiveLink'} 
              onClick={ ()=> setTab('year')}>
              Year
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header