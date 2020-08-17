import React from 'react';
import './App.css';
import ComponenteControlado from './ComponenteControlado';

function App() {


  return (
    <div className="App">
      <div className="title">
      <a className="titulo">Manejo de entradas en input</a>
      <br/><br/><br/>
      <a className="segundo">Hooks [useState]</a>
      </div>
      <br/><hr/>

      <input type="text" placeholder="Name"  /><br/>
      <input type="password" placeholder="contraseña"  /><br/>
      {/* <button>Enviar</button> */}
      <br/>

      <h1>Componente de clase</h1>
      <ComponenteControlado/>

    </div>
  );
}

export default App;
