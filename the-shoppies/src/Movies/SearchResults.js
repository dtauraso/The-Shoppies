import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateMoviePreference } from '../Redux/Actions'

import styled from 'styled-components';

const SearchResultsLayout = styled.div`

    padding: 15px;
    /* width: vh; */
`
const MoviesLayout = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    // needs space for justify-content to separate each movie
    /* height: 3000px; */
    width: 200px;
    justify-content: space-between;
`

const ImageStyle = styled.img`
    width: 150px;

`
const SearchResults = (props) => {

    const { Root: {
        lastSearchedTitle,
        nominatedMovies,
        searchedMovies}
    } = props
    console.log(searchedMovies)

    

    return (
        <SearchResultsLayout>
            <p>Results for "{lastSearchedTitle}"</p>
            <MoviesLayout>
                {Object.keys(searchedMovies).map((movieTitle, i) => (
                    <div key={i}>
                        {/* <ImageStyle> */}
                            <ImageStyle src={`${searchedMovies[movieTitle].poster}`}></ImageStyle>
                        {/* </ImageStyle> */}
                        <p>{movieTitle} {searchedMovies[movieTitle].year} 
                            <button onClick={() => {props.updateMoviePreference(movieTitle, 'nominateMovie')}}>I am a button</button></p>
                        
                    </div>
                ))}
            </MoviesLayout>
            
        </SearchResultsLayout>
    )

}

const mapStateToProps = state => {
    return {
        Root: state
    }
}
export default connect(
    mapStateToProps,
    { updateMoviePreference }
)(SearchResults)
// export default SearchResults;