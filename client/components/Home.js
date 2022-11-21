import React from 'react'

import Search from './Search'
import Trending from './Trending'
import Recommended from './Recommended'

function Home({ data }) {
  return (
    <section className='layout layout__home'>
      <Search />
      <Trending data={data} />
      <Recommended data={data} />
    </section>
  )
}

export default Home
