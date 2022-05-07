/*addEventListener("DOMContentLoaded", () => {
    const nav__menu = document.querySelector(".nav__menu");
    nav__menu.addEventListener("click", () => {
      const nav__ul = document.querySelector(".nav__ul");
        nav__ul.classList.toggle("show");
      
    });
});*/


addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    burger.addEventListener("click", () => {
        const nav__ul = document.querySelector(".nav__ul");
        nav__ul.classList.toggle("show");
        burger.classList.toggle("active")

    });
});