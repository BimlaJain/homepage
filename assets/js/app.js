let nav = document.querySelector("nav")
window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        nav.style.backgroundColor = "black";

    }
    else {
        nav.style.backgroundColor = "transparent";
    }
})