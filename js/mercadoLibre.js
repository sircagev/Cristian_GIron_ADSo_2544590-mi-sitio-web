let inputBusqueda = document.getElementById("inputBusqueda");

class Automovil {
    constructor(marca, modelo, imagen, precio, año, kilometraje, lugar) {
        this.marca = marca;
        this.modelo = modelo;
        this.imagen = imagen;
        this.precio = precio;
        this.año = año;
        this.kilometraje = kilometraje;
        this.lugar = lugar;
    }
}

let auto1 = new Automovil("landRover", "G63", 'images/landRover.webp', 150000000, 2021, 45000, 'Engativa - Bogotá');
let auto2 = new Automovil("Corvette", "C7 ZR1", 'images/Corvette.jpg', 150000000, 2021, 45000, 'Engativa - Bogotá');
let auto3 = new Automovil('Nazda','ahsdvajsvd','no tengo',52155522,255,548545,'Pitalito-Hila')

let autos = [auto1, auto2, auto3]

window.addEventListener("load", function (event) {

    let mainContent = document.getElementById("mainContent");

    autos.forEach(auto => {
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
        imgAuto.setAttribute('src', auto.imagen);
        imgAuto.setAttribute('class', 'img-auto')

        // Caja para la informacion
        let boxInfo = document.createElement("div");
        boxProducto.appendChild(boxInfo);
        boxInfo.setAttribute("class", "box-info");

        let marcaLabel = document.createElement('label');
        boxInfo.appendChild(marcaLabel);
        let textnodoMarca = document.createTextNode(auto.marca + " " + auto.modelo);
        marcaLabel.appendChild(textnodoMarca);
        marcaLabel.setAttribute('class', 'marca');

        //precio
        let precio = document.createElement('label');
        boxInfo.appendChild(precio);
        let precioStr = Intl.NumberFormat('de-DE').format(auto.precio)
        let textNodoPrecio = document.createTextNode("$" + precioStr);
        precio.appendChild(textNodoPrecio);
        precio.setAttribute('class', 'precio');

        let infExt = document.createElement('label');
        boxInfo.appendChild(infExt);
        let textNodoInfExt = document.createTextNode(auto.año + " · " + auto.kilometraje + " Km · " + auto.lugar);
        infExt.appendChild(textNodoInfExt);
        infExt.setAttribute('class', 'infExt');

        let boxCorazon = document.createElement('div');
        boxImg.appendChild(boxCorazon);
        boxCorazon.setAttribute('class','icon-corazon');

        let icon = document.createElement('i');
        boxCorazon.appendChild(icon);
        icon.setAttribute('class', 'fa-regular fa-heart'); 
    });
})