import React from 'react';
import '../style/Registro.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
export const Registro = (props) => {
  const {titulo,Descripcion,Descripcion2} = props

  return(
<div className="Registro">
<div className="Menu">
<>
  
  <br />
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/"><img className="Logo" src="../img/Yeah2.jpg" alt=""/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Inicio</Nav.Link>
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
<center>

<div className="Registro">
<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center ">
<img className="Logo" src="https://www.tumarcafacil.com/wp-content/uploads/2017/06/RegistroDeMarca-01-1.png" alt="Logo" />
 <h3 className="display-4">{titulo}</h3>
  <p className="lead">
  {Descripcion}
  </p>
<p className="lead">

Si te registras tendras una atencion mas efectiva, rapida y segura al igual <option>que te identificaremos en nuestra plataforma</option>
</p>
</div>

<div>
<form action="/Menu" className= "text-center">
<div>
  <row>
<div>
    <group className="formGridName">
    <div><label for= "inputName">Nombre de usuario</label></div>
      <input type="Name" placeholder="" />
    </group>
</div>

<div>
    <group className="formGridPassword">
    <div><label for= "inputPassword">Contraseña</label></div>
      <input type="password" placeholder="Contraseña" />
    </group>
</div>

<div>
    <group className="formGridPassword1">
      <label for= "inputPassword1"></label>
      <input type="password1" placeholder="Confirmar contraseña" />
    </group>
</div>
  </row>
</div>
<div>
  <group className="formGridAddress1">
  <div><label for= "inputAddress1">Datos de ubicacion</label></div>
    <input className= "Address1" type= "Address1" placeholder="Direccion de residencia" />
  </group>
</div>

<div>
  <group className="formGridAddress2">
    <label for= "inputAddress2"></label>
    <input className= "Address2" type= "Address2" placeholder="Especificaciones de residencia" />
  </group>
</div>

<div>
  <row>

    <div>
    <group className="formGridCity">
      <label for= "inputCity"></label>
      <input className= "Address2" type= "Address2" placeholder="Ciudad" />
    </group>
</div>

  </row>
</div>

<div>
<div>
<Link to="/Description" ><button  type="button" class="btn btn-dark">Registrar</button>
</Link></div>
<div>
<Link to="/" ><button  type="button" class="btn btn-dark">Volver</button>
</Link></div>
</div>

</form>
</div>
  </div>
  </center>
  <div className="Footer">
  <footer className="container">
  <div className="row">
    <div className="col-12 col-md">
    <img className="Logo4" src="./img/Yeah2.jpg" alt="Logo4" />
    <img className="Logo4" src="https://www.technoscore.com/images/services/react-js-icon.png" alt="Logo4" />
    <img className="Logo4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="Logo4" />
    <img className="Logo4" src="https://www.jcmunera.com/wp-content/uploads/2018/04/9FAD5BD7-14DD-4B44-8250-E65F9EDDFC8A.png" alt="Logo4" />
    </div>
    <div className="col-6 col-md">
      <h4>Integrantes</h4>
      <ul className="list-unstyled text-small">
        <li><a className="text-light" href="/">*Jorge Grisales</a></li>
        <li><a className="text-light" href="/">*Mariana Herrera</a></li>
        <li><a className="text-light" href="/">*Mateo Guillen</a></li>
        <li><a className="text-light" href="/">*Miguel Angel Tamayo</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h4>Redes sociales</h4>
      <ul className="list-unstyled text-small">
      <img className="Logo3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="Logo3" /> <li><a className="text-light" href="/">Instagram: Smart_Menu</a></li>
      <img className="Logo3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="Logo3" /> <li><a className="text-light" href="/">Facebook: Smart Menu</a></li>
      <img className="Logo3" src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt="Logo3" /> <li><a className="text-light" href="/">Google: smartmenuservices@gmail.com</a></li>
      <img className="Logo3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1200px-WhatsApp_logo-color-vertical.svg.png" alt="Logo3" /> <li><a className="text-light" href="/">WhatsApp: +57 345 2345674</a></li>
      <img className="Logo3" src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-6.png" alt="Logo3" /> <li><a className="text-light" href="/">Twitter: Smart Menu</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h4>Información</h4>
      <ul className="list-unstyled text-small">
        <li><a className="text-light" href="/">Somos un grupo de estudiantes que busca actuar de manera visionaria con un servicio unico y diferente, para los establecimientos de comida y su publico. Orientados a la mejora de la metodologia de los restaurantes, brindamos algoritmos de gran rapidez y eficacia para una mejor experiencia en pedidos y entregas.            </a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h4>Términos y Condiciones</h4>
      <ul className="list-unstyled text-small">
        <li><a className="text-light" href="/">Protegido por QR y @#</a></li>
        <li><a className="text-light" href="/">Politica de Datos seguros</a></li>
        <li><a className="text-light" href="/">Privacidad y anonimato</a></li>
        <li><a className="text-light" href="/">E-Commerce terms</a></li>
        <li><a className="text-light" href="/">Binding Contract</a></li>
        <li><a className="text-light" href="/">PayPal terms</a></li>
        <li><a className="text-light" href="/">Google Maps terms</a></li>
      </ul>
    </div>
  </div>
</footer>
</div>
  </div>
)
};
