import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Footer from './components/navegacion/Footer';
import Inicio from './components/paginas/Inicio';
import Items from './components/paginas/Items';
import Pokemo from './components/paginas/Pokemon';
import { Card } from 'reactstrap';

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
 

useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then(res => res.json())
    .then(data => {
      //const datapokemon =data.results[0];
      setTodos(data.results)
    //  console.log(data)
      // Si todo esta cool, actualizamos el pokemón
      // Y le indicamos que no hay error
      
    })
    .catch(err => {
      
    })
}, [])
 


  return (
    <div className="App container"  >
      <Router>
      <Navbar/>  
      <Switch>
        <Route path="/" exact component={Inicio}/>
        <Route path="/pokemo"  component={() => <Pokemo todos={todos} />}/>
        <Route path="/items"  component={() => <Items todos={todos} />}/>
      </Switch> 
      <Footer/>
      </Router>
    
     </div>
  );
}


export default App;
