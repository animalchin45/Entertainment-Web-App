import React from 'react'
import { useSelector } from 'react-redux'

import BookmarkEmpty from '../assets/icon-bookmark-empty.svg'
import BookmarkFull from '../assets/icon-bookmark-full.svg'
import Movie from '../assets/icon-category-movie.svg'
import Tv from '../assets/icon-category-tv.svg'
import Play from '../assets/icon-play.svg'
import { images } from '../hooks/imageImport'

function TrendingCards() {
  const { data } = useSelector((state) => state.data)
  const trending = data.filter((show) => show.isTrending === true)

  const renderedCards = trending.map((title) => {
    const imgPath = title.thumbnail.trending.large
    const imgSrc = images[imgPath.replace('./assets/', '')]

    return (
      <div className='card card--trending' key={title.title}>
        <button className='btn__bookmark btn__bookmark--trending'>
          {title.isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}
        </button>
        <button className='btn btn--play'>
          <div className='btn--play__icon btn--play__icon--trending'>
            <Play />
            <h4>Play</h4>
          </div>
          <div className='card--trending__info'>
            <p>
              {title.year}
              <span className='card__dot'></span>
              {title.category === 'Movie' ? <Movie /> : <Tv />}
              {title.category}
              <span className='card__dot'></span>
              {title.rating}
            </p>
            <h3>{title.title}</h3>
          </div>
          <img src={imgSrc.default} />
        </button>
      </div>
    )
  })

  return <>{renderedCards}</>
}

export default TrendingCards
