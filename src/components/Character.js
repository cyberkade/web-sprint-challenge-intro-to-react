import React, {useState} from 'react';
import styled from 'styled-components';
import Details from './Details';


const Character = (props) => {
    const {theme, name, height, hairColor, eyeColor, skinColor, birthYear, gender, mass} = props;
    const [detailsActive, IsDetailsActive] = useState(false);
    const [character, setCharacter] = useState(null);

    const showCharacter = name => {
        name === character ? setCharacter(null) : setCharacter(name);

    }

    const StyledDiv = styled.div`
        width: 75vw; height: ${detailsActive ? '40vh': '10vh'};
        margin: ${detailsActive ? '20px' : '10px'};
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: flex-start;
        border-radius: 25px;
        color:
            ${props => props.type === 'materialDark' ? props.theme.materialGray : null}
            ${props => props.type === 'regular' ? props.theme.regularBlack : null}
        ;
        background-color: 
            ${props => props.type === 'materialDark' ? props.theme.materialDark : null}
            ${props => props.type === 'regular' ? props.theme.regularBrown : null}
        ;

        h2 {
            margin: 10px 0px 10px 0px;
        }

        button {
            border: none;
            border-radius: 25px;
            margin-bottom: 5px;
            box-shadow:
                ${props => props.type === 'materialDark' ? props.theme.materialBoxShadow : null}
                ${props => props.type === 'regular' ? props.theme.regularBoxShadow : null}
            ;
            background-color: 
                ${props => props.type === 'materialDark' ? props.theme.materialCyan : null}
                ${props => props.type === 'regular' ? props.theme.regularTitle : null}
            ;
            color:
                ${props => props.type === 'materialDark' ? props.theme.materialGray : null}
                ${props => props.type === 'regular' ? props.theme.regularBlack : null}
            ;
            &:hover {
                box-shadow:
                    ${props => props.type === 'materialDark' ? props.theme.materialBoxShadowHover : null}
                    ${props => props.type === 'regular' ? props.theme.regularBoxShadowHover : null}
                ;
        }
    `

    return (
        <StyledDiv type={theme} >
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