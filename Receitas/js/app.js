const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

const nav1 = document.getElementById("nav-1");
nav1.addEventListener("mouseover", mouseOver);
nav1.addEventListener("mouseout", mouseOut);

const nav2 = document.getElementById("nav-2");
nav2.addEventListener("mouseover", mouseOver);
nav2.addEventListener("mouseout", mouseOut);

const nav3 = document.getElementById("nav-3");
nav3.addEventListener("mouseover", mouseOver);
nav3.addEventListener("mouseout", mouseOut);

function mouseOver() {
    this.classList.add("hover");
}

function mouseOut() {
    this.classList.remove("hover");
}

function CheckPage(){
    const currentPath = window.location.pathname;
    const lastPart = currentPath.substring(currentPath.lastIndexOf('/')+1);
    console.log(lastPart)
    if(lastPart == "home.html"){
        nav1.classList.add("selected");
    }

    if(lastPart == "receita.html"){
        nav2.classList.add("selected");
    }

    if(lastPart == "formulario.html"){
        nav3.classList.add("selected");
    }
}

CheckPage();