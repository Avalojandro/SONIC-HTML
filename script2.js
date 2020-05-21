//alert("Estas a punto de jugar SONIC HTML Desarrollado por Avalojandro, asegurate de ajustar el zoom de tu navegador para una mejor experiencia, puedes intentar con un 80%")

//Llamando a los elementos
let background = document.querySelector('.background');
let sonic = document.querySelector('.sonic');
let ring = document.querySelector('.ring');
let ring2 = document.querySelector('.ring2');
let ring3 = document.querySelector('.ring3');
let ring4 = document.querySelector('.ring4');
let ring5 = document.querySelector('.ring5');
let ring6 = document.querySelector('.ring6');
let ring7 = document.querySelector('.ring7');
let ring8 = document.querySelector('.ring8');
let ring9 = document.querySelector('.ring9');
let ring10 = document.querySelector('.ring10');
let ring11 = document.querySelector('.ring11');
let ring12 = document.querySelector('.ring12');
let ring13 = document.querySelector('.ring13');
let ring14 = document.querySelector('.ring14');
let ring15 = document.querySelector('.ring15');
let ring16 = document.querySelector('.ring16');
let ring17 = document.querySelector('.ring17');
let ring18 = document.querySelector('.ring18');
let ring19 = document.querySelector('.ring19');
let ring20 = document.querySelector('.ring20');
let ring21 = document.querySelector('.ring21');
let ring22 = document.querySelector('.ring22');
let ring23 = document.querySelector('.ring23');
let ring24 = document.querySelector('.ring24');
let ring25 = document.querySelector('.ring25');
let ring26 = document.querySelector('.ring26');
let ring27 = document.querySelector('.ring27');
let ring28 = document.querySelector('.ring28');
let ring29 = document.querySelector('.ring29');
let ring30 = document.querySelector('.ring30');
let ring31 = document.querySelector('.ring31');
let ring32 = document.querySelector('.ring32');
let ring33 = document.querySelector('.ring33');
let ring34 = document.querySelector('.ring34');
let ring35 = document.querySelector('.ring35');
let ring36 = document.querySelector('.ring36');
let ring37 = document.querySelector('.ring37');
let ring38 = document.querySelector('.ring38');
let ring39 = document.querySelector('.ring39');
let ring40 = document.querySelector('.ring40');
let ring41 = document.querySelector('.ring41');
let ring42 = document.querySelector('.ring42');
let ring43 = document.querySelector('.ring43');
let ring44 = document.querySelector('.ring44');
let ring45 = document.querySelector('.ring45');
let ring46 = document.querySelector('.ring46');
let ring47 = document.querySelector('.ring47');
let ring48 = document.querySelector('.ring48');
let ring49 = document.querySelector('.ring49');
let ring50 = document.querySelector('.ring50');

let eggman = document.querySelector('.eggman');


var song = new Audio('./assests/greenHill.mp3');
//song.play();

//Velocidad de movimiento
let moveBy = 18;

 
var x=0; //contador para saber la posicion horizontal de sonic
var y=0; //contador para saber la posicion vertical de sonic

window.addEventListener('load', () => {
    //Valores iniciales
    sonic.style.position = 'relative';
    sonic.style.left = "120px";
    sonic.style.top = "95px";

    ring.style.position = 'relative';
    ring.style.left = "730px";
    ring.style.top = "40px";

    ring2.style.position = 'relative';
    ring2.style.left = "780px";
    ring2.style.top = "0px";

    ring3.style.position = 'relative';
    ring3.style.left = "830px";
    ring3.style.top = "-40px";

    ring4.style.position = 'relative';
    ring4.style.left = "880px";
    ring4.style.top = "-80px";

    ring5.style.position = 'relative';
    ring5.style.left = "1330px";
    ring5.style.top = "-120px";

    ring6.style.position = 'relative';
    ring6.style.left = "1380px";
    ring6.style.top = "-160px";

    ring7.style.position = 'relative';
    ring7.style.left = "1430px";
    ring7.style.top = "-200px";

    ring8.style.position = 'relative';
    ring8.style.left = "1480px";
    ring8.style.top = "-240px";

    ring9.style.position = 'relative';
    ring9.style.left = "1530px";
    ring9.style.top = "-280px";

    ring10.style.position = 'relative';
    ring10.style.left = "1580px"; //+50
    ring10.style.top = "-320px";  //+40  

    ring11.style.position = 'relative'; //UP
    ring11.style.left = "807px"; //+50
    ring11.style.top = "-450px";  //+40 
    
    ring12.style.position = 'relative'; //UP
    ring12.style.left = "1960px"; //+50
    ring12.style.top = "-490px";  //+40 

    ring13.style.position = 'relative'; //UP
    ring13.style.left = "2020px"; //+50
    ring13.style.top = "-530px";  //+40 

    ring14.style.position = 'relative'; //UP
    ring14.style.left = "2080px"; //+50
    ring14.style.top = "-570px";  //+40
    
    ring15.style.position = 'relative'; //UP
    ring15.style.left = "2580px"; //+50
    ring15.style.top = "-525px";  //+40
    
    ring16.style.position = 'relative'; //UP
    ring16.style.left = "2580px"; //+50
    ring16.style.top = "-565px";  //+40

    ring17.style.position = 'relative'; //UP
    ring17.style.left = "2580px"; //+50
    ring17.style.top = "-585px";  //+40

    ring18.style.position = 'relative'; //UP
    ring18.style.left = "2580px"; //+50
    ring18.style.top = "-585px";  //+40

    eggman.style.position = 'relative';
    eggman.style.left = "1060px"; //+50
    eggman.style.top = "-2040px";  //+40      
});

//Funciones de movimiento
//IZQUIERDA
function runLeft(){
    ring.style.left = parseInt(ring.style.left) + moveBy + 'px';
    ring2.style.left = parseInt(ring2.style.left) + moveBy + 'px';
    ring3.style.left = parseInt(ring3.style.left) + moveBy + 'px';
    ring4.style.left = parseInt(ring4.style.left) + moveBy + 'px';
    ring5.style.left = parseInt(ring5.style.left) + moveBy + 'px';
    ring6.style.left = parseInt(ring6.style.left) + moveBy + 'px';
    ring7.style.left = parseInt(ring7.style.left) + moveBy + 'px';
    ring8.style.left = parseInt(ring8.style.left) + moveBy + 'px';
    ring9.style.left = parseInt(ring9.style.left) + moveBy + 'px';
    ring10.style.left = parseInt(ring10.style.left) + moveBy + 'px';
    ring11.style.left = parseInt(ring11.style.left) + moveBy + 'px';

    eggman.style.left = parseInt(eggman.style.left) + moveBy + 'px';
    x--;

}
//DERECHA  
function runRight(){
    ring.style.left = parseInt(ring.style.left) - moveBy + 'px';
    ring2.style.left = parseInt(ring2.style.left) - moveBy + 'px';
    ring3.style.left = parseInt(ring3.style.left) - moveBy + 'px';
    ring4.style.left = parseInt(ring4.style.left) - moveBy + 'px';
    ring5.style.left = parseInt(ring5.style.left) - moveBy + 'px';
    ring6.style.left = parseInt(ring6.style.left) - moveBy + 'px';
    ring7.style.left = parseInt(ring7.style.left) - moveBy + 'px';
    ring8.style.left = parseInt(ring8.style.left) - moveBy + 'px';
    ring9.style.left = parseInt(ring9.style.left) - moveBy + 'px';
    ring10.style.left = parseInt(ring10.style.left) - moveBy + 'px';
    ring11.style.left = parseInt(ring11.style.left) - moveBy + 'px';

    eggman.style.left = parseInt(eggman.style.left) + moveBy + 'px';
    x++;

}

//SALTO
function jump(){
    sonic.style.top = parseInt(sonic.style.top) - moveBy + 'px';
 
}

//anillos horizontales
function rings(value, clase){
    if(x==value){
        clase.classList.add("blink");}
}

//anillos verticales
function ringsY(v1, v2, clase){
    if(y == 1){
        if(x>=v1 && x<=v2){
            clase.classList.add("blink");}
        }
}

//KEYDOWN
window.addEventListener('keydown', (e)=>{
    if(e.key == "ArrowRight"){
          runRight();
        sonic.classList.add("moving");
        sonic.classList.remove("sonic2");
        sonic.classList.add("sonic");
        background.classList.add("background2");
        eggman.classList.add("eggRun");
        eggman.classList.remove("eggman");
        y=0;
        console.log(x);


        rings(31, ring);
        rings(35, ring2);
        rings(38, ring3);
        rings(41, ring4);
        rings(66, ring5);
        rings(69, ring6);
        rings(71, ring7);
        rings(74, ring8);
        rings(77, ring9);
        rings(80, ring10);
        
    }

        if(e.key == "ArrowLeft"){
             runLeft();
             y=0;
             console.log(x);
            sonic.classList.add("moving2");
            background.classList.add("background2");
            eggman.classList.add("eggRun");
            eggman.classList.remove("eggman");
            
            rings(31, ring);
            rings(35, ring2);
            rings(38, ring3);
            rings(41, ring4);
            rings(44, ring5);
            rings(47, ring6);
            rings(49, ring7);
            rings(52, ring8);
            rings(55, ring9);
            rings(58, ring10);
        
        }

            if(e.key == "ArrowUp"){                
            sonic.classList.add("jumping");
            y=1;
            console.log(y);
            ringsY(36, 39, ring11);
        }


});

//KEYUP
window.addEventListener('keyup', (e)=>{
    if(e.key == "ArrowRight"){
    
        sonic.classList.remove("moving");
        background.classList.remove("background2");
        eggman.classList.add("eggman");}

        if(e.key == "ArrowLeft"){
            
            sonic.classList.remove("moving2");
            sonic.classList.remove("sonic");
            sonic.classList.add("sonic2");
            background.classList.remove("background2");
            eggman.classList.add("eggman");}

            if(e.key == "ArrowUp"){
                sonic.classList.remove("jumping");
            }
});




