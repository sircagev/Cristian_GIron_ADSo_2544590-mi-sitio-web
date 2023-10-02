let valorPagar = 0;

let cantidadProductos = 0;

let valorProducto = 20000;

let buttonplus = document.getElementById("plus");
let buttonMinus = document.getElementById("minus");
let buttonReset = document.getElementById('reset')

imprimir(valorPagar,cantidadProductos)

function imprimir(valorPagar ,cantidadProductos){
    let spanValorPagar = document.getElementById("totalPagar");
    spanValorPagar.innerHTML = valorPagar;

    let spanCantidadProductos = document.getElementById("totalProductos");
    spanCantidadProductos.innerHTML = cantidadProductos;

    let spanCantidad = document.getElementById("cantidad");
    spanCantidad.innerHTML = cantidadProductos;
}

buttonplus.addEventListener("click",function(){
    
    if(cantidadProductos < 10){
        cantidadProductos++;
        valorPagar = valorProducto * cantidadProductos;
    }
    imprimir(valorPagar,cantidadProductos)
})

buttonMinus.addEventListener("click",function(){
    
    if(cantidadProductos> 0){
        cantidadProductos--;
        valorPagar = valorProducto * cantidadProductos;
    }
    imprimir(valorPagar,cantidadProductos)
})

buttonReset.addEventListener("click",function(){
    
    let valorPagar = 0;
    let cantidadProductos = 0;

    imprimir(valorPagar,cantidadProductos)
})