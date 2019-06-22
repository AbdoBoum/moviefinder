import {combineReducers} from "redux";

import moviesReducer from './moviesReducer';
import selectMovieReducer from "./selectMovieReducer";
import searchMovieReducer from './searchMoviesReducer'

export default combineReducers({
    movies: moviesReducer,
    movie: selectMovieReducer
});
