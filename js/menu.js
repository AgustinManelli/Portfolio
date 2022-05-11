addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    burger.addEventListener("click", () => {
        const nav__ul = document.querySelector(".nav__ul");
        const nav = document.querySelector(".nav__container");
        const loader = document.querySelector(".prueba");
        nav__ul.classList.toggle("show");
        burger.classList.toggle("active");
        nav.classList.toggle("on");
        if (nav.classList.contains("on") ) {
            loader.classList.toggle("off");
        }else{
            loader.classList = ("prueba")
        }

    });
});