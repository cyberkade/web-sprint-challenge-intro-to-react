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
`
const StyledH1 = styled.h1`
  text-shadow: 1px 1px 5px #fff;
  color:
    ${props => props.type === 'materialDark' ? props.theme.materialGray : null}
    ${props => props.type === 'regular' ? props.theme.regularBlack : null}
  ;
`

const App = () => {
  const [data, setData] = useState(null);
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('materialDark');

  useEffect( () => {
    axios.get(BASE_URL)
      .then( res => setData(res.data))
      .catch( err => setError(err))
  }, [])

  const showCharacter = name => name === character ? setCharacter(null) : setCharacter(name);

  const switchTheme = () => theme === 'materialDark' ? setTheme('regular') : setTheme('materialDark');

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    data && <StyledDiv type ={theme} >
      {error && <h1>Oops, something unexpected happened! {error}</h1>}
      <StyledH1 type={theme} >REACT WARS</StyledH1>
      {data.map( (item, index) => <Character showCharacter={showCharacter} key={index} character={character} type={theme} data={data} name={item.name} birthYear={item['birth_year']} height={item.height} gender={item.gender} mass={item.mass} hairColor={item.hair_color} skinColor={item.skin_color} eyeColor={item.eye_color} />)}
    </StyledDiv>
  );
}

export default App;
