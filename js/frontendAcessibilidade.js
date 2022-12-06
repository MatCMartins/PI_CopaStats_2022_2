let condicao = false
function mudarCor(){
    var pagina = document.getElementById("pagina");
    if (condicao==false){
        pagina.style.filter = "invert(100%)";
        condicao = true;
    }
    else{
        pagina.style.filter = "invert(0%)";
        condicao = false;
    }
    
}