export const setSearchedMovies = (movies, searchedtitle) => dispatch => {

    dispatch({
        type: 'setSearchedMovies',
        payload: movies,
        meta: searchedtitle
    })
}

export const updateMoviePreference = (movieTitle, preferenceName) => dispatch => {

    dispatch({
        type: 'updateMoviePreference',
        payload: movieTitle,
        meta: {reducerName: preferenceName}
    })
}