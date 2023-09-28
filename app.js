const toggleBtn= document.querySelector(".toggle-btn");
const hambugerMenu= document.querySelector(".show-menu");
const closeBtn= document.querySelector(".hide-menu");
const nav= document.querySelector(".navigation");
const overlay= document.querySelector(".overlay");




toggleBtn.addEventListener('click',()=>{
    showMenu();
    hideMenu();
    showOverlay();
    toggleNav();
})

function showMenu(){
    hambugerMenu.classList.toggle("active");
}
function hideMenu(){
    closeBtn.classList.toggle("active");
}
function toggleNav(){
    nav.classList.toggle("active");
}
function showOverlay(){
    overlay.classList.toggle("active");
}