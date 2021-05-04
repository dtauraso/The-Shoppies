
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieTitle from './MovieTitle';
import MovieList from './MovieList';
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

const MovieSearchInterface = (props) => {

    // const [nominatedMovies, setNominatedMovies] = useState({})
    // const [searchedMovies, setSearchedMovies] = useState({})
    

    // http://www.omdbapi.com/?i=tt3896198&apikey=785e8c06

    return (

        <div>
            <MoviesLayout>
                <p>The Shoppies</p>
                <MovieTitle/>
                <Movies>
                    {/* <SearchResults/> */}
                    <MovieList moviePreferences={'search'}/>
                    {/* <Nominations/> */}
                    <MovieList moviePreferences={'nominations'}/>
                </Movies>
            </MoviesLayout>

        </div>

    )
    
}

export default MovieSearchInterface;