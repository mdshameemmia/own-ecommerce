import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container my-3'>
        <div className='row'>
            <Link to={'/login'}>
                <button className='btn btn-primary btn-sm m-2'>Login</button>
            </Link>
     
            <Link to={'/change-password'}>
                <button className='btn btn-primary btn-sm m-2'>Change Password </button>
            </Link>

            <Link to={'/forget-password'}>
                <button className='btn btn-primary btn-sm m-2'>Forget Password </button>
            </Link>
        </div>
    </div>
  )
}

export default Home