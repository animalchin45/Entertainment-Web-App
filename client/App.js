import React from 'react'
import { hot } from 'react-hot-loader/root'

import data from './data.json'

function importAll(r) {
  let images = {}
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}

const images = importAll(
  require.context('./assets/thumbnails', true, /\.(png|jpe?g|svg)$/)
)

// console.log(images, data)

const App = () => {
  const renderedStuff = data.map((title) => {
    const imgPath = title.thumbnail.regular.large
    const imgSrc = images[imgPath.replace('./assets/thumbnails/', '')]

    return <img src={imgSrc.default} key={title.title} />
  })

  return (
    <div>
      <h1>MERN Template</h1>
      {renderedStuff}
    </div>
  )
}

export default hot(App)
