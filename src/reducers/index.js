import {combineReducers} from "redux";

import moviesReducer from './moviesReducer';
import selectMovieReducer from "./selectMovieReducer";

export default combineReducers({
    movies: moviesReducer,
    movie: selectMovieReducer
});
