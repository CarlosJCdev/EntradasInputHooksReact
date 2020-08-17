# Manejo de entradas con React Hook `<useState>` `<useReducer>` `<useCallback>`

<p align="center">
<img src="https://raw.githubusercontent.com/CarlosJCdev/Login-React-Firebase/master/src/icons/react1.png">
</p>


### Forma mas común del manejo de entradas
```javascript
const [name, setname] = useState('');
const [password, setpassword] = useState('');

    <input type="text" placeholder="Name" onChange={e => setname(e.target.value)} /><br/>
    <input type="password" placeholder="contraseña" onChange={e => setpassword(e.target.value)} /><br/>
```

### Manejo de la captura de los datos con función externa
```javascript
  const [valores, setValores]= useState('');
  const [valores1, setValores1]= useState('');

  const cambioValores= e =>{
    setValores(e.target.value); };

  const cambioValores1= e =>{
    setValores1(e.target.value); };

```

### Manejo de la captura de los datos con componente de clase
```javascript
  constructor(props) {
        super(props)
        this.state = { value: '' };
        this.Cambios = this.Cambios.bind(this);
    }
    Cambios(e) {
        this.setState({ value: e.target.value });
    }
     <input type="text" value={this.state.value} onChange={this.Cambios} />
     <p>{this.state.value}</p>

```

