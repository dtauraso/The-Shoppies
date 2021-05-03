
import React from 'react';
import styled from 'styled-components';
import MovieTitle from './MovieTitle';
import SearchResults from './SearchResults';
const MoviesLayout = styled.div`

    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    border-color: #BADA55;

`
const Movies = styled.div`

    display: flex;
    flex-direction: row;
`

const MovieList = (props) => {

    return (

        <div>
            <MoviesLayout>
                <p>this is a test</p>
                <MovieTitle/>
                <Movies>
                    <p>this is a search results list</p>
                    <p>this is a nominations list</p>
                </Movies>
            </MoviesLayout>

        </div>

    )
    
}

export default MovieList;