import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import App from './App'
import './styles/main.scss'

let persistor = persistStore(store)

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
