import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%; height:30vh;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    background-color: 
        ${props => props.type === 'materialDark' ? props.theme.materialDark : null}
        ${props => props.type === 'regular' ? props.theme.regular : null}
    ;

    color:
        ${props => props.type === 'materialDark' ? props.theme.materialGray : null}
        ${props => props.type === 'regular' ? props.theme.regularBlack : null}
    ;

    h3 {
        text-align: center;
        width: 150px;
        margin: 0px 70px;
    }
`

const Details = (props) => {
    const {height, hairColor, eyeColor, skinColor, theme, gender, mass,} = props;

    return (
        <StyledDiv type={theme}>
            <h3>Gender: {gender.charAt(0).toUpperCase() + gender.slice(1)}</h3>
            <h3>Height: {height}</h3>
            <h3>Mass: {mass}</h3>
            <h3>Hair Color: {hairColor}</h3>
            <h3>Eye Color: {eyeColor}</h3>
            <h3>Skin Color: {skinColor}</h3>
        </StyledDiv>
    )
}

export default Details