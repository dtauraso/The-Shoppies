export const setSearchedMovies = (movies) => dispatch => {

    dispatch({
        type: 'setSearchedMovies',
        payload: movies
    })
}
