import React from 'react'
import logoMenu from  "./data/menu.svg" ;

import {Link} from "react-router-dom";

class Header extends React.Component{

    render(){
    return (

        <div>
            <header id="cabecera">
        

                    
                <nav>
                    
                    <div id="logoHeader"> 
                    
                    </div>
                    
                    <div id="iconoHeader"> 
                        <img id="iconoHeaderIcon" src={logoMenu} alt="" /> 
                    </div>
                    
                    <div id="opcionesMenu" className="opcionesMenu uno">
                        
                            <Link to="/Inicio">Inicio</Link> 
                            <Link to="/Portafolio">Portafolio </Link> 
                            <Link to="/Laboratorio">Laboratorio</Link> 
                            <Link to="/Contacto">Contacto</Link> 
                        
                    </div>

                </nav>

            </header>
        </div>

    );
}
}


export default Header;