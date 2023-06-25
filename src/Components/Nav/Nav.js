import React from 'react'

const Nav = () => {
  return (
    <div className='shadow-lg border-b'>
        <div className='flex justify-between p-4'>
            <h2 className='text-2xl font-bold text-[2rem] '>Food</h2>
            <div className='flex gap-4'>
                <button className='border-2 rounded-md px-2'>Login</button>
                <button className='border-2 rounded-md  px-2'>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default Nav