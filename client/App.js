import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import Layout from './components/Layout'
import Home from './components/Home'
import SearchResults from './components/SearchResults'
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
            <Route path='/search' element={<SearchResults />} />
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
