import React from 'react'

import ShowCards from './ShowCards'

function SearchResults({ data }) {
  return (
    <section className='show-grid'>
      <h1>Results for whatever</h1>
      <div className='show-grid__shows'>
        <ShowCards data={data} />
      </div>
    </section>
  )
}

export default SearchResults
