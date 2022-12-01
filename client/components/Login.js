import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { authReset, login } from '../features/auth/authSlice'
import { getBookmarks } from '../features/bookmark/bookmarkSlice'

import Logo from '../assets/logo.svg'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  useEffect(async () => {
    // if (isError) {
    //   toast.error(message)
    // }

    if (isSuccess && user) {
      await dispatch(getBookmarks())
      navigate('/')
    }

    return () => {
      dispatch(authReset())
    }
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  return (
    <div className='account__wrapper'>
      <div className='account'>
        <Logo />
        <div className='account__form'>
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
            <input
              className='input input__account'
              placeholder='Email address'
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
            />
            <input
              className='input input__account'
              placeholder='Password'
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
            />
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
