let inputBusqueda = document.getElementById("inputBusqueda");

class Automovil {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

let auto1 = new Automovil("Mercedes", "G63");

window.addEventListener("load", function (event) {

    let mainContent = document.getElementById("mainContent");

    // Caja para el producto
    let boxProducto = document.createElement("div");
    mainContent.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");

    // Caja para la imagen
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");
    let imgAuto = document.createElement('img');
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute('src', 'images/landRover.webp');
    imgAuto.setAttribute('class', 'img-auto')

    // Caja para la informacion
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");
    let marcaLabel = document.createElement('label');
    boxInfo.appendChild(marcaLabel);
    let textnodoMarca = document.createElement(auto1.marca + "" + auto1.modelo);
    marcaLabel.appendChild(textnodoMarca);

})