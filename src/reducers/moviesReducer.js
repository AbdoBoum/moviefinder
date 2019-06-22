export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return action.payload;
        case 'FETCH_MOVIE_BY_QUERY':
            return action.payload;
        default:
            return state;
    }
};
