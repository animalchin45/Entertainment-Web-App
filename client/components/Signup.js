import React from 'react'

import Logo from '../assets/logo.svg'

function Signup() {
  return (
    <div className='account__wrapper'>
      <div className='account'>
        <Logo />
        <div className='account__form'>
          <h1>Sign Up</h1>
          <form>
            <input
              className='input input__account'
              placeholder='Email address'
            />
            <input className='input input__account' placeholder='Password' />
            <input
              className='input input__account'
              placeholder='Repeat Password'
            />
            <button className='btn btn__account' type='submit'>
              Create an account
            </button>
          </form>
          <div className='account__footer'>
            <p>
              Already have an account? <a href='/login'>Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
