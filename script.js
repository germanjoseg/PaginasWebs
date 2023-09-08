let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("illustrator");
    habilidades[1].classList.add("photoshop");
    habilidades[2].classList.add("aftereffects");
    habilidades[3].classList.add("indesign");
    habilidades[4].classList.add("coreldraw");
    habilidades[5].classList.add("csharp");
    habilidades[6].classList.add("html5");
    habilidades[7].classList.add("unity");
    habilidades[8].classList.add("unrealengine");
    habilidades[9].classList.add("maya");
    habilidades[10].classList.add("blender");
    habilidades[11].classList.add("substancepainter");
    habilidades[12].classList.add("ingles");
    habilidades[13].classList.add("portugues");
    
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
