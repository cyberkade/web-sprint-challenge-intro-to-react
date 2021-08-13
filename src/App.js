import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BASE_URL from './constants';
import './App.css';
import styled from 'styled-components';
import Character from './components/Character'

const StyledDiv = styled.div`
  text-align: center;
  width: 100vw; height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  
  h1 {
    text-shadow: 1px 0px 5px 
    ${props => props.type === 'materialDark' ? 'black' : null}
    ${props => props.type === 'regular' ? 'white' : null}
    ;
    color:
      ${props => props.type === 'materialDark' ? props.theme.materialGray : null}
      ${props => props.type === 'regular' ? props.theme.regularBlack : null}
    ;
    font-size: 40px;
  }
`

const StyledButton = styled.button`
  position: relative;
  top: -75px;
  left: -50px;
  align-self: flex-end;
  display: inline-block;
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  margin: 0px 50px 0px 0px;
  box-shadow: 0px 0px 3px #f5f5f5;
  background-color: 
      ${props => props.type === 'materialDark' ? props.theme.materialDark : null}
      ${props => props.type === 'regular' ? props.theme.regularBrown : null}
  ;
  color:
      ${props => props.type === 'materialDark' ? props.theme.materialGray : null}
      ${props => props.type === 'regular' ? props.theme.regularBlack : null}
  ;
  &:hover {
      box-shadow: 0px 0px 5px #f5f5f5;}

`

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('materialDark');

  useEffect( () => {
    axios.get(BASE_URL)
      .then( res => setData(res.data))
      .catch( err => setError(err))
  }, [])

  const switchTheme = () => theme === 'materialDark' ? setTheme('regular') : setTheme('materialDark');

  return (
    data && <StyledDiv type ={theme} >
              {error && <h1>Oops, something unexpected happened! {error}</h1>}
              <h1 type={theme} >REACT WARS</h1>
              <StyledButton onClick={ () => switchTheme()} type={theme}>Change Theme</StyledButton>
              {data.map( (item, index) => <Character key={index} theme={theme} data={data} name={item.name} birthYear={item['birth_year']} height={item.height} gender={item.gender} mass={item.mass} hairColor={item.hair_color} skinColor={item.skin_color} eyeColor={item.eye_color} />)}
            </StyledDiv>
  );
}

export default App;
