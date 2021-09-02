import React from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';

import Header from './header/Header.js';
import Footer from './footer/Footer.js';


import Ruta1 from '../pages/inicio/Inicio.js';
import Ruta2 from '../pages/portafolio/Portafolio.js';
import Ruta3 from '../pages/laboratorio/Laboratorio.js';
import Ruta4 from '../pages/contacto/Contacto.js';

import NotFound from '../pages/notFound/NotFound.js'

class App extends React.Component{

    render(){
        return (
            

            <BrowserRouter>

                <Header/>

                    <Switch>
                        <Route exact path="/inicio" component={Ruta1} />
                        <Route exact path="/portafolio" component={Ruta2} />
                        <Route exact path="/laboratorio" component={Ruta3} />
                        <Route exact path="/contacto" component={Ruta4} />
                        <Route exact path="/" component={Ruta1} />
                        <Route component={NotFound} />
                    </Switch>    
            
                <Footer/>
            </BrowserRouter>
        
        );
    }
}


export default App;