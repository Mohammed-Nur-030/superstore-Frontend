import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (

    // <div className='bg-green-400 h-[100vh] w-full'>
    <div className='login h-[100vh] w-full'>
      <div className="container text-white h-[80vh]  mx-auto  flex flex-col justify-center items-center ">
        <div>
          <h2 className='text-8xl font-bold text-center'>404</h2>
          <h3 className='text-center font-semibold pt-2'>UH OH! You're lost.</h3>
          <p className='text-center py-2'>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
                <div className=' flex items-center justify-center py-4'>
          <NavLink to="/">
            <button className='error-button bg-white px-4 py-2 rounded-full  font-semibold hover:bg-green-700 hover:text-white' >Go Back to Home</button>
          </NavLink>
                </div>
        </div>  
      </div>
    </div>
  )
}

export default Error
