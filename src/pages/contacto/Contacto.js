import React from "react";
import git from "./data/github.png";
import facebook from "./data/facebook.png";

import "./style.css";
class  Contacto extends React.Component{

    render(){
        return(

            <>
        <section id="contacto" className="section">

            <p className="tituloSection">Contacto</p>

            <div className="sendEmail">

                
                    <label for="mensaje"><p>Desarrollemos Juntos:</p></label>
                    <input type="text" name="mensaje" id="mensaje" placeholder="Ingresa tu mensaje" autocomplete="off"></input>  
                    <a href="mailto:nivekalexander.12@gmail.com?subject=Trabajemos%Juntos"><input className="botonSubmit" type="button" value="Enviar"></input></a>

                
            </div>

            <div className="socialRed">

                <div className="footerIcons">
                    <a href="https://github.com/nivekalexander" target="_blank"><img src={git} alt="contactGit"/></a>
                    <a href="https://www.facebook.com/profile.php?id=100010420770799" target="_blank"><img src={facebook} alt="contactFacebook"/></a>
                </div>

            </div>

            </section>
        </>

        );
    }

}

export default Contacto;