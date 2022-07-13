var ul = document.querySelector('nav ul');


function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    } 
}
function menuX(){
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
        document.querySelector('.menu').src = "img/menu_mobile.svg";
    }else{
        ul.classList.add('open');
        document.querySelector('.menu').src = "img/menu_mobile-X.svg";
    } 
}