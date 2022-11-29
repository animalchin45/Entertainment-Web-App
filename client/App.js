import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import Layout from './components/Layout'
import Home from './components/Home'
import FilterdShows from './components/FilteredShows'
import BookmarkedShows from './components/BookmarkedShows'
import Login from './components/Login'
import Signup from './components/Signup'
import PageNotFound from './components/PageNotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/search' element={<SearchResults />} /> */}
            <Route
              path='/movies'
              element={<FilterdShows filterType={'Movies'} />}
            />
            <Route path='/tv' element={<FilterdShows filterType={'Tv'} />} />
            <Route path='/bookmarks' element={<BookmarkedShows />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default hot(App)
