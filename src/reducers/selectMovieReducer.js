export default (state=null, action) => {
    switch (action.type) {
        case 'FETCH_MOVIE':
            return action.payload;
        default:
            return state;
    }
}
