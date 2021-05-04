const initialState = {
    lastSearchedTitle: '',
    nominatedMovies: {},
    searchedMovies: []
}

const Reducers = (state = initialState, action) => {
 
    const { type, payload, meta } = action
    if(type === '@@INIT') {
        return state
    }
    else if(type === 'setSearchedMovies') {

        let movies = {}

        payload.forEach(movie => {
            console.log(movie)
            const { Title, Year, Poster } = movie
            movies = {
                ...movies,
                [Title]: {
                    year: Year,
                    poster: Poster
                }
            }
        })
        return {
            ...state,
            lastSearchedTitle: meta,
            searchedMovies: movies
        }
    }
    else if(type === 'updateMoviePreference') {
        if(meta['functionName'] === 'nominateMovie') {
            console.log(payload, state)
            return state
        }
        else {
            return state
        }
    }
    // else if(type === 'nominateMovie') {
    //     console.log(payload, state)
    //     return state
    // }
    
    // return state
}

export default Reducers;