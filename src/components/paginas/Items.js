import React from "react"
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button,Modal } from 'react-bootstrap'


const items = () => {
  
  function Lista(){
    const [pok2, setpok2]= useState([]);
    const [imagen, setImg]= useState([]);
    const [nombre, setnombre]= useState([]);
    const [index, setIndex]= useState([]);
    const [datospoke, setDatospoke]= useState([]);
    const [lista, setLista]= useState([]);
  const [tablaLista, setTablaLista]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  const [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const peticionGet=async()=>{
    await axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(response=>{
      setLista(response.data.results);
      setTablaLista(response.data.results);
    }).catch(error=>{
      console.log(error);
    })
  }

   

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaLista.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      
      ){
        return elemento;
      }
    });
    setLista(resultadosBusqueda);
    
  }
  useEffect(()=>{
    peticionGet();
    },[])
    
      return (
        <div className="Container-fluid">
          <div className="containerInput  ">
          <div className="form-control">
           
          <br/>
            <input
              className="form-control inputBuscar "
              value={busqueda}
              placeholder="Búsqueda por Nombre "
              onChange={handleChange}
            />
             
          </div>
          </div>
    
         <div className="table-responsive">
           <table className="table table-sm table-bordered">
             <thead>
               <tr>
                 <th>Numero</th>
                 <th>Nombre</th>
                 <th>Ver</th>
                 
               </tr>
             </thead>
    
             <tbody>
               {lista && 
               lista.map((lista,index)=>(
                 <tr >
                   <td>{index+1}</td>
                   <td>{lista.name}</td>

                   <td><button className="btn btn-success" value={lista.url} onClick={() => {
                                                                                 // handleShow();
                                                                                  Prueba(lista.url,(index+1),lista.name);
                                                                                }}>
                    <FontAwesomeIcon icon={faEye} />
                  </button></td>
                    
                 </tr>
               ))}
             </tbody>
    
           </table>
    
         </div>
         
        
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pokémon N° {index}{busqueda}</Modal.Title>
        </Modal.Header>
        <Modal.Body><h1 align="center">{nombre}</h1>
        <br/>
          <img className ="card-img-top" align="center" src={imagen} width="250"/> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        
      );
      function Prueba(url,index,nombre){
        
          
        setpok2(url)
         setIndex(index)
         setImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+index+".png")
         setnombre(nombre);
        handleShow();
         
        return url
       }
      
  }
  
  
    
    return (
        <div>
          <h1>pagina items</h1>
          {Lista()
          }
         </div>
      );
      
}

export default items 