const initialState = {
    movieListCategory: {
        search: {
            string: 'Results for ""',
            buttonText: 'Nominate',
            reducerName: 'nominateMovie',
            container: {}
        },
        nominations: {
            string: 'Nominations',
            buttonText: 'Remove',
            reducerName: 'removeNomination',
            container: {}
        }
    }
}

const assign = (state, object) => {
    let keyValues = {...state}
    Object.keys(object).forEach(key => {
        keyValues = {
            ...keyValues,
            [key]: object[key]
        }
    })
    return keyValues
}
const remove = (state, movieName) => {

    console.log({state, movieName})
    let container = {}
    Object.keys(state).forEach(movieTitle => {
        if(movieTitle !== movieName) {
            container[movieTitle] = state[movieTitle]
        }
    })
    console.log({container})
    return container

}
const deepAssign = (state, path, object, cb) => {
    // state is an object
    // console.log("deep copy", path)
    // console.log("path", path)
    // console.log("reduced path", path.filter((node, i) => i > 0))
    // console.log(path.length === 0)
    // console.log(state)

    if(path.length === 0) {
        // console.log("replace", state, value)
        return cb(state, object)

    } else if(path.length > 0) {

        const firstNode = path[0]
        // if the path is broken return {..state}
        if(!state.hasOwnProperty(firstNode)) {

            // copy of original with some object references from the original?
            return {...state}
        }
        else {
            return {
                ...state,
                [firstNode]: deepAssign(    state[firstNode],
                                            path.filter((node, i) => i > 0),
                                            object,
                                            cb)
            }
        }
    }
}


const Reducers = (state = initialState, action) => {
 
    const { type, payload, meta } = action
    if(type === '@@INIT') {
        return state
    }
    else if(type === 'setSearchedMovies') {

        let movies = {}

        payload.forEach(movie => {
            // console.log(movie)
            const { Title, Year, Poster } = movie
            movies = {
                ...movies,
                [Title]: {
                    year: Year,
                    poster: Poster,
                    isNominated: Title in state.movieListCategory.nominations.container? true: false
                }
            }
        })
        return deepAssign(  state,
                            ['movieListCategory', 'search'],
                            {string: `Results for "${meta}"`, container: movies},
                            assign)        
    }
    else if(type === 'updateMoviePreference') {
        if(meta['reducerName'] === 'nominateMovie') {
            console.log("nominate movie", payload, state)

            if(!(payload in state.movieListCategory.nominations)) {
                state = deepAssign( state,
                                    ['movieListCategory', 'search', 'container', `${payload}`],
                                    { isNominated: true },
                                    assign)
                
                return deepAssign(  state,
                                    ['movieListCategory', 'nominations', 'container'],
                                    {[payload]: state.movieListCategory.search.container[payload]},
                                    assign)
            }
            return state
        }
        else if(meta['reducerName'] === 'removeNomination'){
            console.log('remove nomination', payload, state)
            /*
            'movieListCategory', 'search', 'container'
            */
            state =  deepAssign(  state,
                                ['movieListCategory', 'nominations', 'container'],
                                payload,
                                remove)
            return deepAssign( state,
                                ['movieListCategory', 'search', 'container', `${payload}`],
                                { isNominated: false },
                                assign)
        }
    }
}

export default Reducers;