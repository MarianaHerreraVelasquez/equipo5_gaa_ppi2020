import React from 'react';
import '../styles.css';


import { Description} from '../components/Description';

import { Registro } from '../components/Registro';
import { Inicio } from '../components/Inicio';
import { DatosdeOrden } from '../components/DatosdeOrden';
import { Otroinicio} from '../components/Otroinicio';
import { Mapa } from '../components/Mapa';
import { Metododepago } from '../components/Metododepago';
import { Ubicacion } from '../components/Ubicacion';
import { Menu } from '../components/Menu';
import { Menu2 } from '../components/Menu2';
import { Presentacion } from '../components/Presentacion';
import { Header2 } from '../components/Header2';
import { TipoPedido } from '../components/TipoPedido';
import { Restaurantes } from '../components/Restaurantes';

import {BrowserRouter,Route} from 'react-router-dom'

export default function Ppicontainer(){
  return(
    <BrowserRouter className="Ppicontainer">
  <Route path='/Menu' exact component={Menu}/>

  <Route path='/DatosdeOrden' exact component={DatosdeOrden}/>
  <Route path='/Description' exact component={Description}/>


  <Route path='/Header2' exact component={Header2}/>
  <Route path='/Inicio' exact component={Inicio}/>
  <Route path='/Mapa' exact component={Mapa}/>
  <Route path='/Menu2' exact component={Menu2}/>
  
  <Route path='/Metododepago' exact component={Metododepago}/>
  <Route path='/Otroinicio' exact component={Otroinicio}/>
  <Route path='/Registro' exact component={Registro}/>

<Route path='/TipoPedido' exact component={TipoPedido}/>
  <Route path='/' exact component={Ubicacion}/>
  <Route path='/Restaurantes' exact component={Restaurantes}/>
  <Route path='/Presentacion' exact component={Presentacion}/>

    
    </BrowserRouter>
  );
}
 