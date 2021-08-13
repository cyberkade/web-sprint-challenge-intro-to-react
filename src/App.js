import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BASE_URL from './constants';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [character, setCharacter] = useState('');
  const [error, setError] = useState(null);

  useEffect( () => {
    axios.get(BASE_URL)
      .then( res => setData(res.data))
      .catch( err => setError(err))
  }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    data && <div className="App">
      {error && <h1>Oops, something unexpected happened! {error}</h1>}
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
