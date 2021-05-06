import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';


const Banner = (props) => {

    const { Root: { movieListCategory: { nominations: { container } } } } = props
    let numberOfNominations = Object.keys(container).length
    if(numberOfNominations >= 5) {
        return (<p>You have {numberOfNominations} nominations</p>)
    }
    else {
        return (<div></div>)
    }
}

const mapStateToProps = (state) => {

    return {
        Root: state
    }
}
export default connect(
    mapStateToProps,
    { /*updateBanner*/ }
)(Banner)
