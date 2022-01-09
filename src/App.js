import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Items from './components/paginas/Items';
import Pokemo from './components/paginas/Pokemon';

function App() {
  const [todos, setTodos] = useState()
/*const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
const fetchApi = async () =>{
  const response = await fetch(url)
  console.log(response)
}
useEffect(() =>{
  fetchApi()
},[])*/
const datapokemon = 0;

useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => res.json())
    .then(data => {
      //const datapokemon =data.results[0];
      setTodos(data.results)
      //console.log(todos)
      // Si todo esta cool, actualizamos el pokemón
      // Y le indicamos que no hay error
      
    })
    .catch(err => {
      
    })
}, [])
console.log(todos)
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <ul>
        { !todos ? 'Cargando..' : 
        todos.map( (todo,index)=>{
          return <li>{todo.name}</li>
        }
        ) 

        }
      </ul>

       
      
      <Switch>
        <Route path="/" exact component={Inicio}/>
        <Route path="/pokemo"  component={Pokemo}/>
        <Route path="/items"  component={Items}/>
        
      </Switch> 
      </Router>
      
     </div>
  );
}


export default App;
