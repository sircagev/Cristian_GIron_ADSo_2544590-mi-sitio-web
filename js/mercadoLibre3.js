let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil {
    constructor(marca, modelo, imagen, precio, ao, kilometros, ciudad) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.ao = ao;
        this.kilometros = kilometros;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let auto1 = new Automovil("landRover", "G63", 'images/landRover.webp', 150000000, 2021, 45000, 'Engativa - Bogotá');
let auto2 = new Automovil("Corvette", "C7 ZR1", 'images/Corvette.jpg', 150000000, 2021, 50000, 'Engativa - Bogotá');
let auto3 = new Automovil('Mazda', 'NN', 'images/mazda.jpg', 50000000, 255, 548545, 'Pitalito-Hila');
let auto4 = new Automovil('Mazda', 'CX-30', 'images/MAZDACX-30.jpg', 65000000, 255, 548545, 'Pitalito-Hila');
let auto5 = new Automovil('Mazda', '2 Sedan', 'images/MAZDA2Sedan.jpg', 48500000, 255, 548545, 'Pitalito-Hila');
/* 

/* Función  para cargar el vehículo*/
cargarVehiculo(auto1);
cargarVehiculo(auto2);
cargarVehiculo(auto3);
cargarVehiculo(auto4);
cargarVehiculo(auto5);

window.addEventListener("keydown", function (event) {
    let busqueda = document.getElementById("inputBusqueda").value;
    if (event.key == "Enter") {
        boxProductos.innerHTML = "";
        let inputUser = busqueda.toLowerCase();
        if (inputUser == "mazda") {
            cargarVehiculo(auto2);
            cargarVehiculo(auto5);
        }
        else if (inputUser == "toyota") {
            cargarVehiculo(auto1);
        }
        else if (inputUser == "mitsubishi") {
            cargarVehiculo(auto3);

        }
        else if (inputUser == "chevrolet") {
            cargarVehiculo(auto4);

        }
    }
});
/* Función  con parámetro*/
function cargarVehiculo(auto) {
    let boxProductos = document.getElementById("boxProductos");

    /* Caja para el producto */
    let boxProducto = document.createElement("div");
    boxProductos.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");

    /* Caja para la imagen */
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-auto");

    /* Caja para la información */
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");
    let marca = document.createElement("label");
    boxInfo.appendChild(marca);
    let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
    marca.appendChild(txtNodeMarca);
    marca.setAttribute("class", "marca");
    /* Precio */
    let precio = document.createElement("label");
    boxInfo.appendChild(precio);
    let txtNodePrecio = document.createTextNode("$" + Intl.NumberFormat("de-DE").format(auto.precio));
    precio.appendChild(txtNodePrecio);
    precio.setAttribute("class", "precio");
    /* año */
    let ao = document.createElement("label");
    boxInfo.appendChild(ao);
    let txtNodeAnyo = document.createTextNode(auto.ao + " · ");
    ao.appendChild(txtNodeAnyo);
    ao.setAttribute("class", "info-ao");
    /* Kilometros */
    let kilometros = document.createElement("label");
    boxInfo.appendChild(kilometros);
    let kilometrosStr = Intl.NumberFormat("de-DE").format(auto.kilometros);
    let txtNodeKilometros = document.createTextNode(kilometrosStr + " km" + " · ");

    kilometros.appendChild(txtNodeKilometros);
    kilometros.setAttribute("class", "info-kilometros");
    /* Ciudad  */
    let ciudad = document.createElement("label");
    boxInfo.appendChild(ciudad);
    let txtNodeCiudad = document.createTextNode(auto.ciudad);
    ciudad.appendChild(txtNodeCiudad);
    ciudad.setAttribute("class", "info-ciudad");

    /* ícono corazón */
    let boxCorazon = document.createElement("div");
    boxImg.appendChild(boxCorazon);
    let iconoCorazon = document.createElement("i");
    boxCorazon.appendChild(iconoCorazon);
    boxCorazon.setAttribute("class", "box-corazon");
    iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");

    /* Línea divisora */
    let lineaDiv = document.createElement("div");
    boxProducto.appendChild(lineaDiv);
    lineaDiv.setAttribute("class", "linea-div");
}

/* FILTROS */
cargarFiltro();

function cargarFiltro() {

    mainContent.appendChild(boxFiltro);
    boxFiltro.setAttribute("class", "box-filtro");
}

/* Toggle */
let boxToggle = document.getElementById("boxToggle");
let buttonToggle = document.getElementById("buttonToggle");

boxToggle.addEventListener("click", () => {
    if (boxToggle.classList.contains("box-toggle-off")) {
        boxToggle.classList.add("box-toggle-on");
        boxToggle.classList.remove("box-toggle-off");
        buttonToggle.classList.add("button-toggle-on");
        buttonToggle.classList.remove("button-toggle-off");
    }
    else {
        boxToggle.classList.remove("box-toggle-on");
        boxToggle.classList.add("box-toggle-off");
        buttonToggle.classList.remove("button-toggle-on");
        buttonToggle.classList.add("button-toggle-off");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let inputCalificacion = document.getElementById('inputCalification');
    let btnCalificar = document.getElementById('btnCalificar');
    let stars = document.querySelectorAll('.stars i');

    btnCalificar.addEventListener('click', function () {
        let calificacion = parseFloat(inputCalificacion.value);
        let fullStars = Math.floor(calificacion);
        console.log(calificacion);
        stars.forEach((star, index) => {
            star.className = 'fa-regular fa-star';

            if (index < fullStars) {
                star.className = 'fa-solid fa-star';
                
            } else if (index === fullStars) {

                let residuo = calificacion - fullStars

                if (residuo > 0.2 && residuo <= 0.7) {
                    star.className = 'fa-solid fa-star-half-stroke';
                } else if (residuo > 0.7) {
                    star.className = 'fa-solid fa-star';
                }


            }

        })
    });
});