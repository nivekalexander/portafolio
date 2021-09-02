import React from 'react';

import fotoPerfil from "./data/fotoPerfil.png";

import logoHtml from "./data/iconos/html.svg";
import logoCss from "./data/iconos/css.svg";
import logoBootstrap from "./data/iconos/bootstrap.svg";
import logoJavaScript from "./data/iconos/javascript.svg";
import logoJquery from "./data/iconos/jquery.svg";
import logoPhp from "./data/iconos/php.svg";
import logoMySql from "./data/iconos/mysql.svg";
import logoGit from "./data/iconos/git.svg";
import fotoPerfil2 from "./data/zombie.gif";

import "./style.css";
class  Inicio extends React.Component{

    render(){
        return (
            <>
            <section id="inicio" className="section">
            
            <div className="fondoPerfil">

                <div className="circulo circuloPerfil">

                    

                        <img  className="circulo" src={fotoPerfil} alt="fotoPerfil"/>
                    
                    
                    
                </div>

            </div>

            <div className="perfil">

                
                    <p>¡Hola! soy</p>
                    <h1>Kevin Alexander Garcia Romero</h1>
                    <p>Tecnólogo en Análisis y Desarrollo De Sistemas</p>

               

            </div>
        
            <div className="queHago">
                <h1>Qué Hago</h1>
                <p>Soy programador full-stack apasionado por la tecnología, lo cual me lleva a querer expandir mi conocimiento día tras día en el campo del desarrollo de software tomando cursos y realizando proyectos personales para y así poder ofrecer la mejor experiencia en el desarrollo de proyectos. </p>
                <h4 >Apps y herramientas que uso:</h4>
                

                <img className="icons" src={logoHtml} alt="html"/>
                <img className="icons" src={logoCss} alt="css"/>
                <img className="icons" src={logoBootstrap} alt="bootstrap"/>
                <img className="icons" src={logoJavaScript} alt="javascript"/>
                <img className="icons" src={logoJquery} alt="jquery"/>
                <img className="icons" src={logoPhp} alt="php"/>
                <img className="icons" src={logoMySql} alt="mysql"/>
                <img className="icons" src={logoGit} alt="git"/>
                
                
            </div>
            <div className="circulo queHagoFoto">
                <img className="circulo zombie" src={fotoPerfil2} alt="fotoZombie"/>
            </div>
        </section>
        </>
        );
    }

}

export default Inicio;