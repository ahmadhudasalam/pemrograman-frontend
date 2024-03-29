import { createSlice } from '@reduxjs/toolkit'
import data from '../../utils/constants/data'

const moviesSlice = createSlice({
  name: 'Movies Slice',
  initialState: {
    movies: data,
    moviesLocal: data,
  },
  reducers: {
    addMovie(state, action) {
      state.moviesLocal.push(action.payload)
    },
    updateMovies(state, action) {
      state.movies = action.payload
    },
  },
})

const { addMovie, updateMovies } = moviesSlice.actions
const movieReducer = moviesSlice.reducer

export { addMovie, updateMovies }
export default movieReducer
