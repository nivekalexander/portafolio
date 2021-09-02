import React from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';

import Header from '../parts/Header.js';
import Footer from '../parts/Footer.js';


import Ruta1 from '../pages/Inicio.js';
import Ruta2 from '../pages/Portafolio.js';
import Ruta3 from '../pages/Laboratorio.js';
import Ruta4 from '../pages/Contacto.js';

import NotFound from '../pages/NotFound.js'

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