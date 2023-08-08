import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [example, setExample] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/examples/1')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setExample(data.example);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HII, {example.name}
        </p>
      </header>
    </div>
  );
}

export default App;
