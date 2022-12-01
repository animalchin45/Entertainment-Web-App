import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { authReset, register } from '../features/auth/authSlice'
import { getBookmarks } from '../features/bookmark/bookmarkSlice'

import Logo from '../assets/logo.svg'

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
  })

  const { email, password, password2 } = formData

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
  }, [user, isSuccess, isError, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      console.log('Passwords do not match!')
    } else {
      const userData = {
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  return (
    <div className='account__wrapper'>
      <div className='account'>
        <Logo />
        <div className='account__form'>
          <h1>Sign Up</h1>
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
            <input
              className='input input__account'
              placeholder='Repeat Password'
              type='password'
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
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
