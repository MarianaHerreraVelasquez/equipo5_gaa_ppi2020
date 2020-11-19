import React from 'react';
import '../style/Otroinicio.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
export const Otroinicio = (props) => {
const {tit2,Descrip2} = props

  return(

<div className="Description">
<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">

<div><img className="Logo" src="https://www.tumarcafacil.com/wp-content/uploads/2017/06/RegistroDeMarca-01-1.png" alt="Logo" /></div>
  <h3>{tit2}</h3>
  <p className="lead">
  {Descrip2}
  </p>
</div>
<div>
<form className= "text-center">
  <div>
  
  <button className= "btn btn-dark" type="submit">
        Iniciar con Facebook
      </button>
    </div>
 
    <div>
      <button className= "btn btn-dark" type="submit">
        Iniciar con Google
      </button>
    </div>
    <div>
      <button className= "btn btn-dark" type="submit">
        Registrate y crea tu cuenta
      </button>
    </div>
    
  </form>
</div>
  </div>
  
)
};