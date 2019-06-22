export default (state=null, action) => {
    switch (action.type) {
        case 'FETCH_MOVIE_BY_ID':
            return action.payload;
        default:
            return state;
    }
}
