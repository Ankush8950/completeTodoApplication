import React from 'react'

const UserNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center absolute left-[15rem] top-[10rem]'>
       <h1 className='font-semibold text-xl'> Sorry, user not found!</h1>
         <h1 className='font-normal text-sm'> Please check the spelling or try searching for something else</h1>
    </div>   
  )
}

export default UserNotFound