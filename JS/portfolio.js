import { inertToggle,handleClickOutside, handleEsc } from "./accessibility.js";
import { toggleMenu } from "./functionality.js";



document.addEventListener("keydown", handleEsc);
document.addEventListener("click", handleClickOutside);

const clickableDivs = document.querySelectorAll(".project-redirection");





const mobileQuery = window.matchMedia("(max-width: 800px)");

function onLayoutChange() {
  updateNavMode(mobileQuery.matches);
  updateProjectCardMode(mobileQuery.matches);
}

onLayoutChange();

mobileQuery.addEventListener("change", onLayoutChange);

function updateNavMode(isMobile) {

    const nav = document.getElementById("sidebar");

    if (!nav) return;

    if (isMobile) {
    nav.classList.add("toggleable");
    } else {
    nav.classList.remove("toggleable");
    }

    inertToggle(nav, !isMobile);
};

document.querySelectorAll(".closing-button").forEach((button) => {

    button.addEventListener("click", (event) => {

        event.stopPropagation();
        const isOpen = toggleMenu(button);

        document.body.classList.toggle("overflow-hidden", isOpen);

    });

});



function updateProjectCardMode(isMobile) {
  clickableDivs.forEach(div => {
    div.classList.toggle("is-clickable", !isMobile);
  });
};

function attachClicktoDivs(){

    clickableDivs.forEach(div => {
    div.addEventListener("click", () => {
        if (!div.classList.contains("is-clickable")) return;
        if (!div.dataset.url) return;
        window.location.href = div.dataset.url;
    });
});

};

attachClicktoDivs();
