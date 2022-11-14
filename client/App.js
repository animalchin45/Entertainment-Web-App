import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import Layout from './components/Layout'
import Home from './components/Home'
import Search from './components/Search'
import PageNotFound from './components/PageNotFound'

import data from './data.json'

function importAll(r) {
  let images = {}
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}

const images = importAll(
  require.context('./assets', true, /\.(png|jpe?g|svg)$/)
)

const App = () => {
  const renderedStuff = data.map((title) => {
    const imgPath = title.thumbnail.regular.large
    const imgSrc = images[imgPath.replace('./assets/', '')]

    return <img src={imgSrc.default} key={title.title} />
  })

  // return (
  //   <div>
  //     <h1>MERN Template</h1>
  //     {renderedStuff}
  //   </div>
  // )

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default hot(App)
