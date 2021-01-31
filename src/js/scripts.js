(function(){
    var portafolio=document.getElementById("portafolio").innerHTML;
    var laboratorio=document.getElementById("laboratorio").innerHTML;
    
    if (portafolio.trim() =='<p class="tituloSection">Portafolio</p><br>') {
        document.getElementById("portafolio").innerHTML+='<div class="notSection">'+
                                                                    '<img src="./src/img/study.gif">'+
                                                                    '<p>En Proceso</p>'
                                                                    +'</div>';
    }
    if (laboratorio.trim() =='<p class="tituloSection">Laboratorio</p><br>') {
        document.getElementById("laboratorio").innerHTML+='<div class="notSection">'+
                                                                    '<img src="./src/img/study.gif">'+
                                                                    '<p>En Proceso</p>'
                                                                    +'</div>';
    }
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

    window.addEventListener("scroll",()=>{

        const currentScroll=window.pageYOffset;
        if (currentScroll==0) {
            header.style=null;
            
        } else {
            header.style.position="fixed";
            header.style.background="#0c0c22";
        }

    });




    
})();