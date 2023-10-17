class Automovil{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

let auto1 = new Automovil("Toyota", "TXL");
let auto2 = new Automovil("Mazda", "TXL");

inputBusqueda.addEventListener('keydown', function(){
    let mainContent = document.getElementById('mainContent')

    let boxProducto = document.createElement('div')
    mainContent.appendChild(boxProducto)
    boxProducto.setAttribute('class','box-producto')

    let boxImg = document.createElement('div')
    mainContent.appendChild(boxImg)
    boxImg.setAttribute('class','box-img')

    let boxInfo = document.createElement('div')
    mainContent.appendChild(boxInfo)
    boxInfo.setAttribute('class','box-info')

})