import { createSlice } from '@reduxjs/toolkit'

import data from './data.json'

const initialState = {
  data,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataReset: (state) => initialState,
  },
})

export const { dataReset } = dataSlice.actions
export default dataSlice.reducer
