// PRELOAD

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load",  () => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});


// // GET YEAR 

let currentDate = new Date().getFullYear();

const date = document.querySelector("footer .year");

date.innerText = currentDate;






// init Aos 
    AOS.init({
        duration: 1000 ,
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on

    });
