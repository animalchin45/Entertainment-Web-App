import React from 'react'

import TrendingCards from './TrendingCards'

import { useHorizontalScroll } from '../hooks/useHorizontalScroll'

function Trending({ data }) {
  const scrollRef = useHorizontalScroll()

  return (
    <section className='trending'>
      <h1>Trending</h1>
      <div ref={scrollRef} className='trending__shows'>
        <TrendingCards data={data} />
      </div>
    </section>
  )
}

export default Trending
