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

### manejo de la captura de los datos con función externa
```javascript
  const [valores, setValores]= useState('');
  const [valores1, setValores1]= useState('');

  const cambioValores= e =>{
    setValores(e.target.value); };

  const cambioValores1= e =>{
    setValores1(e.target.value); };

```

