// variable declarations
let menu = document.getElementById('menu__box');
let navMenu_btn = document.getElementById('menu-btn');
let dark_btn = document.getElementById('switch')
let sun__icon = document.getElementById('sun')
let top_btn = document.getElementById('scrollTop')
// mobile-btn

navMenu_btn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
});

//darkmode-btn and function

dark_btn.addEventListener('click', ()=>{
    sun__icon.classList.toggle('active')
    document.body.classList.toggle('dark')
});


// up button

function scrollToTopFunction(pxScreen) {
    window.addEventListener('scroll', ()=>{
        let scroll = document.documentElement.scrollTop;
        
        if (scroll > pxScreen){
            top_btn.style.right = 20 + "px"
        } else {
            top_btn.style.right = -100 + "px"
        }
    })   

    top_btn.addEventListener('click', ()=>{
        window.scrollTo(top)
    })
}

scrollToTopFunction(400);