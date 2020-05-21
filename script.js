

// let sonic = document.querySelector('.sonic');
// let moveBy = 20;
 
// window.addEventListener('load', () => {
//     sonic.style.position = 'absolute';
//     sonic.style.left = 0;
//     sonic.style.top = 0;
// });
 
 
// window.addEventListener('keydown', (e) => {
//     switch (e.key) {
//         case 'ArrowLeft':
//             sonic.style.left = parseInt(sonic.style.left) - moveBy + 'px';
//             sonic.classList.add("moving");

//             break;
//         case 'ArrowRight':
//             sonic.style.left = parseInt(sonic.style.left) + moveBy + 'px';
//             sonic.classList.add("moving");

//             break;
//     }
// });




//Llamando a los elementos
let sonic = document.querySelector('.sonic');
let bug = document.querySelector('.bug');
//Velocidad de movimiento
let moveBy = 18;
 

window.addEventListener('load', () => {
    //Valores iniciales
    sonic.style.position = 'relative';
    sonic.style.left = "500px";
    sonic.style.top = "95px";

    bug.style.position = 'relative';
    bug.style.left = "700px";
    bug.style.top = "40px";
});

//Funciones de movimiento
//IZQUIERDA
function runLeft(){
    sonic.style.left = parseInt(sonic.style.left) - moveBy + 'px';
}
//DERECHA  
function runRight(){
    sonic.style.left = parseInt(sonic.style.left) + moveBy + 'px';
}

//SALTO
function jump(){
    sonic.style.top = parseInt(sonic.style.top) - moveBy + 'px';
}



window.addEventListener('keydown', (e)=>{
    if(e.key == "ArrowRight"){
        runRight();
        sonic.classList.add("moving");
        sonic.classList.remove("sonic2");
        sonic.classList.add("sonic");}

        if(e.key == "ArrowLeft"){
            runLeft();
            sonic.classList.add("moving2");}

            if(e.key == "ArrowUp"){
                
            sonic.classList.add("jumping");}

});

window.addEventListener('keyup', (e)=>{
    if(e.key == "ArrowRight"){
        sonic.classList.remove("moving")}

        if(e.key == "ArrowLeft"){
            sonic.classList.remove("moving2");
            sonic.classList.remove("sonic");
            sonic.classList.add("sonic2");}

            if(e.key == "ArrowUp"){
                sonic.classList.remove("jumping")
            }
});
