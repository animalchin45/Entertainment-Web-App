import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { resetData } from '../features/data/dataSlice'

import Trending from './Trending'
import Recommended from './Recommended'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetData())
  }, [])

  return (
    <section className='layout__home'>
      <Trending />
      <Recommended />
    </section>
  )
}

export default Home
