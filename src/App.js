import React, {useState, useReducer} from 'react';
import './App.css';

function App() {

  const [valores, setValores]= useState('');
  const [valores1, setValores1]= useState('');

  const cambioValores= e =>{
    setValores(e.target.value);
  };
  const cambioValores1= e =>{
    setValores1(e.target.value);
  };

  return (
    <div className="App">
      <div className="title">
      <a className="titulo">Manejo de entradas en input</a>
      <br/><br/><br/>
      <a className="segundo">Hooks [useState]</a>
      </div>
      <br/><hr/>

      <input type="text" placeholder="Name" onChange={cambioValores}  /><br/>
      <input type="password" placeholder="contraseña" onChange={cambioValores1}  /><br/>
      {/* <button>Enviar</button> */}
      <br/>



    </div>
  );
}

export default App;
