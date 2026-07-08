import React from 'react'

function Year() {
  return (
    <section className='p-4'>
      <div className='border border-black rounded bg-gray-700 p-2 text-left mb-2 flex justify-between gap-2'>
        <div className='bg-gray-500 p-1 rounded min-w-[20%] text-center h-fit'>
          <span className='text-4xl'>2026</span>          
        </div>
        <div className='flex flex-wrap gap-2 justify-end'>
          <span className='border border-black px-2 rounded bg-gray-500 inline-block h-fit'>Task one</span>
        </div>
      </div>
    </section>
  )
}

export default Year
