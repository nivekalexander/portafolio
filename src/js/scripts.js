(function(){
    var portafolio=document.getElementById("portafolio").innerHTML;
    var laboratorio=document.getElementById("laboratorio").innerHTML;
    
    if (portafolio.trim() =='<p class="tituloSection">Portafolio</p><br>') {
        document.getElementById("portafolio").innerHTML+="<p>1</p>";
    }
    if (laboratorio.trim() =='<p class="tituloSection">Laboratorio</p><br>') {
        document.getElementById("laboratorio").innerHTML+="<p>1</p>";
    }
    
})();