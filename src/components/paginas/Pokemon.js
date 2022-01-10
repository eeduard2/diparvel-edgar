import React from "react";
import { useEffect, useState } from 'react';
 
const pokemon = ({ todos }) => {
 

  function Cargar(url) {
    const [pok, setPok] = useState()
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setPok(data.sprites.front_default)
        })
        .catch(err => {
          
        })
    }, [])
   // console.log(pok)
    return pok
  }

  

    return (
        <div className="container">
          <ul>
         
      </ul>
      <br/>  
      <br/>  
          <h1>  </h1>
<div className="row row-cols-1 row-cols-md-3 g-4">

          { !todos ? 'Cargando..' : 
        todos.map( (todo,index)=>{
          return <div className="card">
          <img src={Cargar(todo.url)} width="250"/> 
      
            <div className="card-body">
              <h5 className="card-title">{todo.name}</h5>
              <p className="card-text">Pokemon Numero {index+1}</p>
               
            </div>
          </div>
          
        }
        ) 

        }
            
            
            
          </div>
          
         </div>
      );
      
}

export default pokemon 