let menutoggle = document.querySelector(".toggle")
let menu = document.querySelector(".menu")


menutoggle.onclick = () => {
    menu.classList.toggle("active")
    menutoggle.classList.toggle("active")
}