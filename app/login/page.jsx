import LoginForm from '@/components/LoginForm'

import React from 'react'

const loginPage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 m-5 h-full'>
        <LoginForm/>
    </div>
  )
}

export default loginPage