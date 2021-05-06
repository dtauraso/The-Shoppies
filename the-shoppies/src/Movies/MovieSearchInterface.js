
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieTitle from './MovieTitle';
import MovieList from './MovieList';
import Banner from './Banner';
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
            {/* put notifications on this page */}
            <MoviesLayout>
                <Banner/>
                <p>The Shoppies</p>
                <MovieTitle/>
                <Movies>
                    <MovieList moviePreferences={'search'}/>
                    <MovieList moviePreferences={'nominations'}/>
                </Movies>
            </MoviesLayout>

        </div>

    )
    
}

export default MovieSearchInterface;