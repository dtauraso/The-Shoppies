import React, { useState } from 'react';

import styled from 'styled-components';

const MovieTitleLayout = styled.div`

    padding: 15px;

`


const MovieTitleFormLayout = styled.div`

`


const MovieTitle = (props) => {

    const [movieTitle, setMovieTitle] = useState('')

    const searchMovies = () => {
        /*
        search api for movies using movieTitle
        */
    }
    return (
        <MovieTitleLayout>
            <p>Movie Title</p>
            <form>
                <lable>
                    <input  type="text"
                            value="search for movie"
                            onChange={(e)=> {}}/>
                </lable>
            </form>
        </MovieTitleLayout>
        
    )


}

export default MovieTitle;