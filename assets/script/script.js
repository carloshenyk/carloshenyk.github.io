const d = new Date();
document.querySelector(".rodape_autoral___data").innerHTML = d.getFullYear();

// Configuração menu de navegação

const menuMobile = document.querySelector(".toggle");
const menuNave = document.querySelector(".cabecalho__nave");
const btnNav = document.querySelector(".btn-nav");
menuMobile.onclick = function(){
    menuMobile.classList.toggle('active');
    menuNave.classList.toggle('active');
}
