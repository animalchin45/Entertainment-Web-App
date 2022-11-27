import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

// Import Reducers
// auth reducer
// bookmark reducer
import dataReducer from './features/data/dataSlice'

// Combine Reducers
const reducers = combineReducers({
  data: dataReducer,
})

// Configure Persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['auth'],
}

// Initialize Persistant Reducer
const persistedReducer = persistReducer(persistConfig, reducers)

// Configure Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store
