import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
// import { updateBanner } from '../Redux/Actions'


const Banner = (props) => {

    const { Root } = props
    let numberOfNominations = Object.keys(Root.movieListCategory.nominations.container).length
    if(numberOfNominations >= 5) {
        return (
            <p>You have {numberOfNominations} nominations</p>
        )
    }
    else{
        return (<div></div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log({ownProps})
    return {
        Root: state//,
        // moviePreference: ownProps.moviePreference

    }
}
export default connect(
    mapStateToProps,
    { /*updateBanner*/ }
)(Banner)
