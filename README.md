# Manejo de entradas con React Hook `<useState>` `<useReducer>` `<useCallback>`

![N|Solid](https://raw.githubusercontent.com/CarlosJCdev/Login-React-Firebase/master/src/icons/react1.png)

- Manejo con useState y con onChange
- Manejo con nombres de clave dinámica
- Una alternativa a useState, => useReducer
- useCallback, a la espera del cambio de una dependencia

### Forma mas comun del manejo de entradas
```javascript
const [name, setname] = useState('');
const [password, setpassword] = useState('');

    <input type="text" placeholder="Name" onChange={e => setname(e.target.value)} /><br/>
    <input type="password" placeholder="contraseña" onChange={e => setpassword(e.target.value)} /><br/>
```

