var ul = document.querySelector('nav ul');


function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
        document.querySelector('.menu').src = "img/menu_mobile.svg";
    }else{
        ul.classList.add('open');
        document.querySelector('.menu').src = "img/menu_mobile-X.svg";
    } 
}

/**********************************************************************
***********************************************************************
************************* ANIMAÇÃO DO HEADER **************************
***********************************************************************
***********************************************************************/
const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');


for(var i =1; i < 400; i++){
    banner.innerHTML += "<div class='blocks'></div>";
        const duration = Math.random() * 5;
        blocks[i].style.animationDuration = 2 + duration + 's';
        blocks[i].style.animationDelay = duration + 's';   
}

const section = document.querySelector('section');
setTimeout(() => {
    section.classList.add('active')
}, 14000);
