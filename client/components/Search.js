import React from 'react'

import SearchButton from '../assets/icon-search.svg'

function Search() {
  return (
    <form className='search'>
      <button className='btn__search'>
        <SearchButton />
      </button>
      <input
        className='input input__search heading-medium'
        type='text'
        placeholder='Search for movies or TV series'
      ></input>
    </form>
  )
}

export default Search
