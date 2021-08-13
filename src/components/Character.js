import React, {useEffect} from 'react';
import styled from 'styled-components';
import Details from './Details';

const StyledDiv = styled.div`
    width: 75vw; height: 10vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    border-radius: 25px;
    background-color: red;

    h2 {
        margin: 10px 0px 10px 0px;
    }
`

const Character = (props) => {
    const {theme, data, name, height, hairColor, eyeColor, skinColor, birthYear, showCharacter, character, gender, mass} = props;

    useEffect( () => {
        console.log(data)
      }, [])

    return (
        <StyledDiv type={theme}>
           <h2>{name}</h2>
           <button onClick={ () => showCharacter(name)}>{birthYear}</button> 
            {
             character === name && <Details type={theme} height={height} hairColor={hairColor} skinColor={skinColor} eyeColor={eyeColor} gender={gender} mass={mass}/> 
            }
        </StyledDiv>
    )
}

export default Character;