import React from 'react'

import Trending from './Trending'
import Recommended from './Recommended'

function Home() {
  return (
    <section className='layout__home'>
      <Trending />
      <Recommended />
    </section>
  )
}

export default Home
