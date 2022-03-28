
const burger = document.querySelector(".burger")
const nav = document.getElementById('navbar')



function toggleMenu(){
    // console.log(nav)
    nav.classList.toggle("nav-active")
    burger.classList.toggle("toggle")
}

burger.addEventListener("click", toggleMenu)
