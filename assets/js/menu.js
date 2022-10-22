// variable declarations
let menu = document.getElementById('menu__box');
let navMenu_btn = document.getElementById('menu-btn');
let dark_btn = document.getElementById('switch');
let sun__icon = document.getElementById('sun');
let top_btn = document.getElementById('scrollTop');
let contact_btn = document.getElementById('contact-btn');
let about_btn = document.getElementById('about-btn')
let skills_btn = document.getElementById('skills-btn')
let studies_btn = document.getElementById('studies-btn')
let proyects_btn = document.getElementById('proyects-btn')

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

scrollToTopFunction(370);

// nav menu buttons

/*let contact_btn = document.getElementById('contact-btn');
let about_btn = document.getElementById('about-btn')
let skills_btn = document.getElementById('skills-btn')
let studies_btn = document.getElementById('studies-btn')
let proyects_btn = document.getElementById('proyects-btn')*/ 

contact_btn.addEventListener('click', ()=>{
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    
    menu.classList.toggle('active');

});

about_btn.addEventListener('click', ()=>{
    window.scroll({
        top: 670,
        left: 0,
        behavior: "smooth"
    });
    
    menu.classList.toggle('active');

});

skills_btn.addEventListener('click', ()=>{
    window.scroll({
        top: 1650,
        left: 0,
        behavior: "smooth"
    });

    menu.classList.toggle('active');

});
studies_btn.addEventListener('click', ()=>{
    window.scroll({
        top: 2150,
        left: 0,
        behavior: "smooth"
    });

    menu.classList.toggle('active');

});

proyects_btn.addEventListener('click', ()=>{
    window.scroll({
        top: 3150,
        left: 0,
        behavior: "smooth"
    });
    
    menu.classList.toggle('active');

});