import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

// Import Reducers
// auth reducer
// bookmark reducer
import dataReducer from './features/data/dataSlice'

// Combine Reducers
const reducers = combineReducers({
  data: dataReducer,
})

// Configure Store
const store = configureStore({
  reducer: reducers,
})

export default store
