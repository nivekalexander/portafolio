import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';


import './css/style.css';



const container= document.getElementById('root');





ReactDOM.render(<>< App /></>,container);







//scroll and menu
(function(){
    
  var boton=document.getElementById("iconoHeader");
  
  var header=document.getElementById("cabecera");
  var opciones=document.getElementById("opcionesMenu");
  var iconoheader=document.getElementById("iconoHeaderIcon");
  var aux=0; 
 
  boton.addEventListener("click",function(){
      
      if (aux==0) {
          iconoheader.style.background="transparent";
          opciones.className=('opcionesMenu dos');
          header.style.position="fixed";
          aux=1;
         
      }else{
          iconoheader.style=null;
          header.style=null;
          opciones.className=("opcionesMenu uno");
          aux=0;
      }


  });
  opciones.addEventListener("click",function(){
      
    if (aux==1) {
       
        iconoheader.style=null;
        header.style=null;
        opciones.className=("opcionesMenu uno");
        aux=0;
    }


});

  window.addEventListener("scroll",()=>{

      const currentScroll=window.pageYOffset;
      if (currentScroll>=0 && currentScroll<1) {
          header.style=null;
         
          
      } else {
          header.style.position="fixed";
          
          header.style.background="#0c0c22";
          
      }

  });




  
})();

