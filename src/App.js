import React, {useState} from 'react';
import './App.css';

function App() {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');

  return (
    <div className="App">
      <div className="title">
      <a className="titulo">Manejo de entradas en input</a>
      <br/><br/><br/>
      <a className="segundo">Hooks [useState]</a>
      </div>
      <br/><hr/>

      <input type="text" placeholder="Name" onChange={e => setname(e.target.value)} /><br/>
      <input type="password" placeholder="contraseña" onChange={e => setpassword(e.target.value)} /><br/>
      {/* <button>Enviar</button> */}
      <br/>
      <a>Estado name: <span>{name}</span></a> <br/><br/>
      <a>Estado password: <span>{password}</span></a>

    </div>
  );
}

export default App;
