const btnMobile = document.querySelector(".btn-mobile");
const nav =document.querySelectorAll(".nav");



btnMobile.addEventListener("click" , () => {
    btnMobile.classList.toggle("active");
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach (n=> n.addEventListener("click", () => {
    btnMobile.classList.remove("active");
    nav.classList.remove("active");
})); 
