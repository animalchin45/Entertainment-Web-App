import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { logout } from '../features/auth/authSlice'

import Logo from '../assets/logo.svg'
import Home from '../assets/icon-nav-home.svg'
import Movies from '../assets/icon-nav-movies.svg'
import Tv from '../assets/icon-nav-tv-series.svg'
import Bookmark from '../assets/icon-nav-bookmark.svg'
import { avatar } from '../assets'

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const onClick = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header className='header'>
      <Logo />
      <nav>
        <Link to='/'>
          <Home />
        </Link>
        <Link to='/movies'>
          <Movies />
        </Link>
        <Link to='/tv'>
          <Tv />
        </Link>
        <Link to='/bookmarks'>
          <Bookmark />
        </Link>
      </nav>
      {user && (
        <div className='header__user'>
          <button className='btn' onClick={onClick}>
            <img src={avatar} />
          </button>
          <div className='header__user__tag'>
            <p>{user.email.split('@')[0]}</p>
            <p>Logout</p>
          </div>
        </div>
      )}
      {!user && (
        <div className='header__user'>
          <Link to='/login'>
            <img src={avatar} />
          </Link>
          <div className='header__user__tag'>
            <p>Login</p>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
