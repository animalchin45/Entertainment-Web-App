import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { filterShows } from '../features/data/dataSlice'

import ShowCards from './ShowCards'

function FilterdShows({ filterType, pageTitle }) {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.data)

  // Filter Results
  useEffect(() => {
    dispatch(filterShows(filterType))
  }, [filterType])

  return (
    <section className='show-grid'>
      <h1>{pageTitle}</h1>
      <div className='show-grid__shows'>
        <ShowCards data={data} />
      </div>
    </section>
  )
}

export default FilterdShows
