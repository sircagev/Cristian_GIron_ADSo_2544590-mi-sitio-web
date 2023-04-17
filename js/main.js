let menuHamburguesa = document.getElementById("menuHamburguesa")
let mainMenu = document.getElementById("mainMenu")

menuHamburguesa.addEventListener("click",function(){
  if (mainMenu.classList.contains("main-menu")) {
    mainMenu.classList.add("item");
    mainMenu.classList.remove("main-menu");
  } else {
    mainMenu.classList.remove("item");
    mainMenu.classList.add("main-menu");
  }
})