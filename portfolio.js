document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll(".header-anchor").forEach((button) => button.addEventListener("click", toggleActive));

    document.querySelector(".menu-btn").addEventListener("click", displayMenu);
    document.querySelector(".closing-btn").addEventListener("click", closeMenu);
    
})



function toggleActive(event){

    const hAnchor = document.querySelectorAll(".header-anchor");

        hAnchor.forEach((anchor) => anchor.classList.remove("active"));

    const sections = document.querySelectorAll(".section");

        sections.forEach((section) => section.classList.remove("display"));



    const selectedAnchor = event.target.closest(".header-anchor");

        selectedAnchor.classList.add("active")

        const secName = selectedAnchor.dataset.name;

        
        document.querySelector(`.${secName}`).classList.add("display");
    

}

function displayMenu(event){

    event.stopPropagation();

    const navBar = document.querySelector(".nav-bar");

    navBar.classList.add("open");

    document.addEventListener("click", closeMenu)

}

function closeMenu(event){

    const navBar = document.querySelector(".nav-bar");
    const closeBtn = document.querySelector(".closing-btn")
    const hAnchor = document.querySelectorAll(".header-anchor");

    const clickedInsideAnchor = Array.from(hAnchor).some(anchor => anchor.contains(event.target));
    

    if(!navBar.contains(event.target) || closeBtn.contains(event.target) || clickedInsideAnchor){
        navBar.classList.remove("open")
    };

}

