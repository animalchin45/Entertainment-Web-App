import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { bookmarkShows } from '../features/data/dataSlice'

import ShowCards from './ShowCards'

function BookmarkedShows() {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.data)

  // Filter Results
  useEffect(() => {
    dispatch(bookmarkShows())
  }, [])

  return (
    <section className='show-grid'>
      <h1>Bookmarks</h1>
      <div className='show-grid__shows'>
        <ShowCards data={data} />
      </div>
    </section>
  )
}

export default BookmarkedShows
