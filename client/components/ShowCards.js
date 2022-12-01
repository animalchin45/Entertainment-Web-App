import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BookmarkEmpty from '../assets/icon-bookmark-empty.svg'
import BookmarkFull from '../assets/icon-bookmark-full.svg'
import Movie from '../assets/icon-category-movie.svg'
import Tv from '../assets/icon-category-tv.svg'
import Play from '../assets/icon-play.svg'
import { images } from '../hooks/imageImport'

function ShowCards({ data }) {
  const { user } = useSelector((state) => state.auth)

  const renderedCards = data.map((title) => {
    const imgPath = title.thumbnail.regular.small
    const imgSrc = images[imgPath.replace('./assets/', '')]

    return (
      <div className='card card--show' key={title.title}>
        {user && (
          <button className='btn__bookmark btn__bookmark--show'>
            {title.isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}
          </button>
        )}
        <button className='btn btn--play'>
          <div className='btn--play__icon btn--play__icon--show'>
            <Play />
            <h4>Play</h4>
          </div>
          <img src={imgSrc.default} />
        </button>
        <div className='card--show__info'>
          <p className='font-small'>
            {title.year}
            <span className='card__dot'></span>
            {title.category === 'Movie' ? <Movie /> : <Tv />}
            {title.category}
            <span className='card__dot'></span>
            {title.rating}
          </p>
          <h4>{title.title}</h4>
        </div>
      </div>
    )
  })
  return <>{renderedCards}</>
}

export default ShowCards
