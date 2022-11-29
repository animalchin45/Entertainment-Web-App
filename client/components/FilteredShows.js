import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import ShowCards from './ShowCards'

function FilterdShows({ filterType }) {
  const { data } = useSelector((state) => state.data)
  const [filteredData, setFilteredData] = useState([])

  // Filter Results
  useEffect(() => {
    if (filterType === 'Movies') {
      setFilteredData(data.filter((type) => type.category === 'Movie'))
    } else {
      setFilteredData(data.filter((type) => type.category === 'TV Series'))
    }
  }, [filterType])

  return (
    <section className='show-grid'>
      <h1>{filterType}</h1>
      <div className='show-grid__shows'>
        <ShowCards data={filteredData} />
      </div>
    </section>
  )
}

export default FilterdShows
