import React from 'react'

import Trending from './Trending'
import Recommended from './Recommended'

function Home({ data }) {
  return (
    <section className='layout__home'>
      <Trending data={data} />
      <Recommended data={data} />
    </section>
  )
}

export default Home
