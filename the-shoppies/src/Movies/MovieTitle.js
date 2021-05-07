import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSearchedMovies } from '../Redux/Actions'

import styled from 'styled-components';

const MovieTitleLayout = styled.div`

    padding: 15px;

`

const MovieTitle = (props) => {

    const { Root: {
                nominatedMovies,
                searchedMovies}
            } = props
    // state refresh from redux isn't resetting movieTitle
    const [movieTitle, setMovieTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`http://www.omdbapi.com/?s=${movieTitle.replace(' ', '%20')}&apikey=785e8c06`)
            .then(res => {
                console.log(res)
                console.log({nominatedMovies, searchedMovies})
                props.setSearchedMovies(res.data.Search, movieTitle)
            })
    }
    
    return (
        <MovieTitleLayout>
            <p>Movie Title</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <input  type="text"
                            value={movieTitle}
                            onChange={(e)=> {
                                // console.log(e.target.value, e)
                                setMovieTitle(e.target.value)
                            }}
                            />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </MovieTitleLayout>
        
    )


}
const mapStateToProps = state => {
    return {
        Root: state
    }
}

export default connect(
    mapStateToProps,
    { setSearchedMovies }
)(MovieTitle)