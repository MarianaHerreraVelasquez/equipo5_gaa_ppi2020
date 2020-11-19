import React from 'react';
import '../style/Restaurantes.css';
import '../style/Footer.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
export const Restaurantes = (props) =>{
  const {} = props;

  return(
    
    <div class="list-group">
<div className="Menu">
<>
  
  <br />
  <Navbar bg="light" variant="light">
  
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="Desp" src="https://image.flaticon.com/icons/png/512/36/36775.png" alt=""/>
    
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
  <Nav.Link href="/Description">Inicio</Nav.Link>
  <Nav.Link href="/Restaurantes">Restaurantes</Nav.Link>
      <Nav.Link href="/TipoPedido">Tipo de pedido</Nav.Link>
  </div>
</div>
    <Navbar.Brand href="/Description"><img className="Logo" src="../img/Logodef.png" alt=""/></Navbar.Brand>
    <Nav className="mr-auto">
  
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Nombre del producto" className="mr-sm-2" />
      <Button variant="outline-light">Buscar</Button>
    </Form>
    
  </Navbar>
</>
</div>
      <center><h1>Elija el restaurante al que desea pedir.</h1></center>
  <a  href="#" class="list-group-item"><center><img className="Re" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/1012px-Burger_King_logo.svg.png" alt="Logo" /><h1>Burguer King.</h1><h5>Nuestras hamburguesas están hechas de 100% carne de res, sin conservadores, sin aditivos, sin tonterías. También hacemos nuestro producto estrella, la hamburguesa WHOPPER®, con 1/4 de libra* de deliciosa carne de res a la parrilla. Una hamburguesa grande.</h5></center></a>
  <a href="/Menu2" class="list-group-item"><center><img className="Re" src="data:image/png;base64,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" alt="Logo" /><h1>McDonald's</h1><h5>McDonald's es una cadena de restaurantes de comida rápida. Sus principales productos son las hamburguesas, sándwiches, patatas fritas, menús para el desayuno, refrescos, batidos, postres y, recientemente, ensaladas y fruta. En la mayoría de los restaurantes se han incluido distintas áreas con juegos para niños.</h5></center></a>
  <a href="#" class="list-group-item"><center><img className="Re" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/1012px-Burger_King_logo.svg.png" alt="Logo" /><h1>Burguer King.</h1><h5>Nuestras hamburguesas están hechas de 100% carne de res, sin conservadores, sin aditivos, sin tonterías. También hacemos nuestro producto estrella, la hamburguesa WHOPPER®, con 1/4 de libra* de deliciosa carne de res a la parrilla. Una hamburguesa grande.</h5></center></a>
  <a href="#" class="list-group-item"><center><img className="Re" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/1012px-Burger_King_logo.svg.png" alt="Logo" /><h1>Burguer King.</h1><h5>Nuestras hamburguesas están hechas de 100% carne de res, sin conservadores, sin aditivos, sin tonterías. También hacemos nuestro producto estrella, la hamburguesa WHOPPER®, con 1/4 de libra* de deliciosa carne de res a la parrilla. Una hamburguesa grande.</h5></center></a>
  <center><Link to="/TipoPedido" ><button type="button" class="btn btn-dark">Volver</button></Link></center>
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
    
  );
};