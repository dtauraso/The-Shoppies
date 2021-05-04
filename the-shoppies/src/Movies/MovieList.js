import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateMoviePreference } from '../Redux/Actions'

import styled, { css } from 'styled-components';

const MovieListLayout = styled.div`

    padding: 15px;
`
const MoviesLayout = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 200px;
    justify-content: space-between;
`

const ImageStyle = styled.img`
    width: 150px;

`
// https://stackoverflow.com/questions/48502647/conditional-rendering-in-styled-components
// const StyledButton = styled.button`
//     ${props => props.isNominated && css`
//         background: grey; 
//         /* border: 1px solid limegreen; */
//         `
//     }
//     ${props => !props.isNominated && css`
//         background: darkred; 
//         border: 1px solid limegreen;
//         `
//     }
// `
const MovieList = (props) => {

    const { Root: {
        lastSearchedTitle,
        movieListCategory },
        moviePreferences
    } = props
    // console.log(searchedMovies)
    console.log({movieListCategory})
    const { string, buttonText, reducerName, container } = movieListCategory[moviePreferences]
    
    return (
        <MovieListLayout>
            <p>{string}</p>
            <MoviesLayout>
                {Object.keys(container).map((movieTitle, i) => {
                    const { poster, year, isNominated } = container[movieTitle]
                    return (
                        <div key={i}>
                            <ImageStyle src={`${poster}`}></ImageStyle>
                            <p>{movieTitle} {year} 
                                <button
                                    // isNominated={isNominated}
                                    disabled={moviePreferences === 'search'? isNominated: !isNominated}
                                    onClick={() => {props.updateMoviePreference(movieTitle, reducerName)}}>
                                    {buttonText}
                                </button>
                            </p>
                        </div>
                    )}
                )}
            </MoviesLayout>
        </MovieListLayout>

    )
}


const mapStateToProps = (state, ownProps) => {
    // console.log({ownProps})
    return {
        Root: state,
        moviePreference: ownProps.moviePreference

    }
}
export default connect(
    mapStateToProps,
    { updateMoviePreference }
)(MovieList)
