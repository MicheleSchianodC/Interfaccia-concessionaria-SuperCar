
 var si = document.getElementsByClassName("si");

 for(var i=0;i<si.length;i++){

    si[i].addEventListener("mouseover", function(){

        this.style.border = "2px solid #00614f";
    })
 }

 for(var i=0;i<si.length;i++) {

    si[i].addEventListener("mouseout",function(){

        this.style.border= "1px solid black";
    })
 }


function cambiaPagina(id){
            
    if(id=="bmwS") {
        window.location.href="https://www.bmw.it/it/home.html?&tl=sea-gl-IT_BMW_NEWCARS_BRAND%20CORE_ITA_BND_ALO_%20-mix-miy-.-sech-BRAND_BND_BRAND%20EXACT_NONE-.-e-bmw-.-.&gclid=Cj0KCQiAjbagBhD3ARIsANRrqEuZTZRnfisXFk8SAoT14BR7z5ZLPBG3iAiEAsr1zQTEy4vxuV0W-xMaAvI2EALw_wcB&gclsrc=aw.ds";
    }
    if(id=="porscheS") {
        window.location.href="https://www.porsche.com/italy/";
    }
    if(id=="mercedesS") {
        window.location.href="https://www.mercedes-benz.it/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE";
    }
    if(id=="alfaromeoS") {
        window.location.href="https://www.alfaromeo.it/";
    }
}


function trigger(id) {
    var par = document.getElementById(id);
    par.style.fontSize="25px";
    par.style.color="#26ffd6";
}

function triggerOut(id) {

    var par = document.getElementById(id);
    par.style.fontSize="17px";
    par.style.color="#ffffff";
}
