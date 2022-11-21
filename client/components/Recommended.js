import React from 'react'
import ShowCards from './ShowCards'

function Recommended({ data }) {
  return (
    <section className='show-grid'>
      <h1>Recommended for you</h1>
      <div className='show-grid__shows'>
        <ShowCards data={data} />
      </div>
    </section>
  )
}

export default Recommended
