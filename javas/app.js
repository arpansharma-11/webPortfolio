
$(document).ready(function(){

    let hamberger = document.querySelector('.hamberger');
    let times     = document.querySelector('.times');
    let mobileNav     = document.querySelector('.mobile-nav');
    let about        = document.querySelector('#about');



    hamberger.addEventListener('click', function(){
        console.log("Clicked succesfully");
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function(){
        console.log("Clicked succesfully");
        mobileNav.classList.remove('open');
    });

    about.addEventListener('click', function(){
        console.log("Clicked succesfully");
        mobileNav.classList.remove('open');
    });

  
}) ;



