import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
`

const Details = (props) => {
    const {height, hairColor, eyeColor, skinColor, theme, gender, mass,} = props;

    return (
        <StyledDiv type={theme}>
            <h3>Gender: {gender}</h3>
            <h3>Height: {height}</h3>
            <h3>Mass: {mass}</h3>
            <h3>Hair Color: {hairColor}</h3>
            <h3>Eye Color: {eyeColor}</h3>
            <h3>Skin Color: {skinColor}</h3>
        </StyledDiv>
    )
}

export default Details