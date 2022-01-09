import React from "react"
import { Link } from "react-router-dom";
const navbar = () => {
    return (
        <div>
          <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link to='/'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" width="75"/> 
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link " to="/pokemo">Pokemons</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link " to="/items">Items</Link>
              </li>
              
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
         </div>
      );
      
}

export default navbar 










      