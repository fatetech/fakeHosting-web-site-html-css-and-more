console.log("Connected")

const hamburgerBtn = document.querySelector(".hamburger")
const mobileNavbars = document.querySelector('.mobile-nav')

hamburgerBtn.addEventListener('click',()=>{
    hamburgerBtn.classList.toggle('open')
    mobileNavbars.classList.toggle('nav-flex')
    mobileNavbars.classList.toggle('hidden')
})