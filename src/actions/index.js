import themoviedb, {API_KEY} from '../api/themoviedb';


export const fetchTrendingMovies = () => async dispatch => {
    const response = await themoviedb.get('/trending/movie/week', {
        params: {
            api_key: API_KEY,
            page: 1
        }
    });
    dispatch({
        type: 'FETCH_MOVIES',
        payload: response.data.results
    })
};

export const fetchMovie = id => async dispatch => {
  const response = await themoviedb.get(`/movie/${id}`, {
      params: {
          api_key: API_KEY
      }
  });
  dispatch({
      type: 'FETCH_MOVIE_BY_ID',
      payload: response.data
  })
};

export const fetchMovieByQuery = query => async dispatch => {
    const response = await themoviedb.get("/search/movie", {
        params: {
            api_key: API_KEY,
            query: query
        }
    });
    dispatch({
        type: 'FETCH_MOVIE_BY_QUERY',
        payload: response.data.results
    })
};
