import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import ShowCards from './ShowCards'

function BookmarkedShows() {
  const { data } = useSelector((state) => state.data)
  const [filteredData, setFilteredData] = useState([])

  // Filter Results
  useEffect(() => {
    setFilteredData(data.filter((type) => type.isBookmarked))
  }, [])

  return (
    <section className='show-grid'>
      <h1>Bookmarks</h1>
      <div className='show-grid__shows'>
        <ShowCards data={filteredData} />
      </div>
    </section>
  )
}

export default BookmarkedShows
