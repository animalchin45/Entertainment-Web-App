import { createSlice } from '@reduxjs/toolkit'

import data from './data.json'

const initialState = {
  data,
  searchTerm: '',
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    resetData: (state) => initialState,
    filterShows: (state, action) => {
      return {
        ...state,
        data: data.filter((item) => item.category === action.payload),
      }
    },
    bookmarkShows: (state) => {
      return {
        ...state,
        data: data.filter((item) => item.isBookmarked),
      }
    },
    setTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    searchShows: (state, action) => {
      return {
        ...state,
        data: data.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      }
    },
  },
})

export const { resetData, filterShows, bookmarkShows, setTerm, searchShows } =
  dataSlice.actions
export default dataSlice.reducer
