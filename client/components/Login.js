import React from 'react'

import Logo from '../assets/logo.svg'

function Login() {
  return (
    <div className='account__wrapper'>
      <div className='account'>
        <Logo />
        <div className='account__form'>
          <h1>Login</h1>
          <form>
            <input
              className='input input__account'
              placeholder='Email address'
            />
            <input className='input input__account' placeholder='Password' />
            <button className='btn btn__account' type='submit'>
              Login to your account
            </button>
          </form>
          <div className='account__footer'>
            <p>
              Don't have an account? <a href='/signup'>Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
