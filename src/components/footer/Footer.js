import React from 'react';

import "./style.css";
class Footer extends React.Component{

    render(){

        return(
            <footer className="section footer ">
            <div className="footerOne">
                <p>Portafolio 2021 Nivek</p>
            </div>   
            <div className="footerTwo">
                <p>Create width ❤️ by <a href="https://github.com/nivekalexander" target="_blank">@nivekalexander</a></p>
            </div>
            </footer>
        );

    }

}
export default Footer;