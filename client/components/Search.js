import React from 'react'

import SearchButton from '../assets/icon-search.svg'

function Search() {
  return (
    <form className='search'>
      <button>
        <SearchButton />
      </button>
      <input
        className='heading-medium'
        placeholder='Search for movies or TV series'
      ></input>
    </form>
  )
}

export default Search
