import React from 'react'
import { useSelector } from 'react-redux'

import ShowCards from './ShowCards'

function BookmarkedShows() {
  const { data } = useSelector((state) => state.data)

  return (
    <section className='show-grid'>
      <h1>Bookmarks</h1>
      <div className='show-grid__shows'>
        <ShowCards data={data.filter((item) => item.isBookmarked)} />
      </div>
    </section>
  )
}

export default BookmarkedShows
