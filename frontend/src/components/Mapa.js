import React from 'react';
import '../style/Mapa.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
export const Mapa = (props) => {
const {tittleMa,DescripcionMa} = props


  return(

<div className="Description">
<div className="Menu">
<>
  
  <br />
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/Description"><img className="Logo" src="../img/Yeah2.jpg" alt=""/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Description">Inicio</Nav.Link>
      <Nav.Link href="/Restaurantes">Restaurantes</Nav.Link>
      <Nav.Link href="/TipoPedido">Tipo de pedido</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Nombre del producto" className="mr-sm-2" />
      <Button variant="outline-light">Buscar</Button>
    </Form>
  </Navbar>
</>
</div>
<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">


<div>
<h1>Porfavor seleccione su ubicacion.</h1>
        <group className="formGridMapa">
          <label className= "inputMapa" for= "inputMapa"></label>
          <input type="Mapa" placeholder="¿Donde estas?..." />
          <button className= "btn btn-dark" type="submit">Buscar</button>
        </group>
    </div>,
<img className="Mapa" src="./img/Mapa.gif" alt="Mapa" />
  <h1 className="display-4">{tittleMa}</h1>
  <p className="lead">
  Para nosotros es de gran importancia que pongas tu ubicación correctamente <option>para llevarte tu pedido de una manera rapida y sin complicaciones.</option>
  </p>
</div>
<div>
<form className= "text-center">    
<Link to="/Menu2" ><button type="button" class="btn btn-dark">Volver</button></Link>
<Link to="/Metododepago" ><button type="button" class="btn btn-dark">Siguiente</button></Link>            

    
  </form>
</div>
</div>

)
};
