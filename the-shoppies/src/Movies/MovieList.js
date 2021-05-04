
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieTitle from './MovieTitle';
import SearchResults from './SearchResults';
import Nominations from './Nominations';
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
    /* justify-content: space-between; */
`

const MovieList = (props) => {

    // const [nominatedMovies, setNominatedMovies] = useState({})
    // const [searchedMovies, setSearchedMovies] = useState({})
    

    // http://www.omdbapi.com/?i=tt3896198&apikey=785e8c06

    return (

        <div>
            <MoviesLayout>
                <p>The Shoppies</p>
                <MovieTitle/>
                <Movies>
                    <SearchResults/>
                    <Nominations/>
                </Movies>
            </MoviesLayout>

        </div>

    )
    
}

export default MovieList;