const initialState = {
    nominatedMovies: {},
    searchedMovies: []
}

const Reducers = (state = initialState, action) => {
 
    const { type, payload } = action
    if(type === '@@INIT') {
        return state
    }
    else if(type === 'setSearchedMovies') {
        return {
            ...state,
            searchedMovies: action.payload
        }
    }
    
    // return state
}

export default Reducers;