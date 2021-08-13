import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Details from './Details';


const Character = (props) => {
    const {theme, data, name, height, hairColor, eyeColor, skinColor, birthYear, showCharacter, character, gender, mass} = props;
    const [detailsActive, IsDetailsActive] = useState(false);

    const StyledDiv = styled.div`
    width: 75vw; height: ${detailsActive ? '40vh': '10vh'};
    margin: ${detailsActive ? '20px' : '10px'};
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
    // useEffect( () => {
    //     console.log(data)
    //   }, [])

    return (
        <StyledDiv type={theme}>
           <h2>{name}</h2>
           <button onClick={ () => {
                showCharacter(name);
                IsDetailsActive(!detailsActive);
            }}>
                {birthYear}
            </button> 
            {
             character === name && <Details type={theme} height={height} hairColor={hairColor} skinColor={skinColor} eyeColor={eyeColor} gender={gender} mass={mass}/> 
            }
        </StyledDiv>
    )
}

export default Character;