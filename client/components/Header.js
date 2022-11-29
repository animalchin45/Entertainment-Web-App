import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/logo.svg'
import Home from '../assets/icon-nav-home.svg'
import Movies from '../assets/icon-nav-movies.svg'
import Tv from '../assets/icon-nav-tv-series.svg'
import Bookmark from '../assets/icon-nav-bookmark.svg'
import { avatar } from '../assets'

function Header() {
  return (
    <header>
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
      <img src={avatar} />
    </header>
  )
}

export default Header
