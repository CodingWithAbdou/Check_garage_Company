// PRELOAD

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load",  () => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});


// GET YEAR 

let currentDate = new Date().getFullYear();

const date = document.querySelector("footer .date");

date.innerText = currentDate;



// init Aos 
    AOS.init({
        duration: 800
    });
