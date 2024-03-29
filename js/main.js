gsap.to("#prueba1", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});

window.addEventListener("scroll", (event) => {
  var scrollY = this.scrollY;
});

const menuLinks = document.querySelectorAll('.nav__ul a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.nav__ul a[href="#${id}"]`);

      if (entry.isIntersecting) {
        if (document.querySelector(".nav__ul a.active")) {
          document
            .querySelector(".nav__ul a.active")
            .classList.remove("active");
        }
        menuLink.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -60% 0px" }
);

menuLinks.forEach((menuLink) => {
  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

window.addEventListener("scroll", (event) => {
  let nav__container = document.getElementById("nav__container1");
  let manelli1 = document.getElementById("logonavfill1");
  let manelli2 = document.getElementById("logonavfill2");
  let manelli3 = document.getElementById("logonavfill3");
  let nav__list1 = document.getElementById("nav__li1");
  let nav__list2 = document.getElementById("nav__li2");
  let nav__list3 = document.getElementById("nav__li3");
  let nav__list4 = document.getElementById("nav__li4");
  let nav__list5 = document.getElementById("nav__li5");
  let nav__list6 = document.getElementById("nav__li6");
  let nav__ul = document.getElementById("nav__ul1");
  let nav__sandwich = document.getElementById("buractive");
  let loader = document.querySelector(".prueba");
  let nav = document.querySelector(".nav__container");
  let scrollsign = document.getElementById("scrollsign1");

  if (scrollY < 150) {
    nav__container.style.boxShadow = "none";
  } else {
    nav__container.style = "none";
  }

  if (nav.classList.contains("on") ) {
    loader.classList.toggle("off");
  }else{
      loader.classList = ("prueba")
  }

  if (scrollY > 500){
    scrollsign.classList = "scrollsign off";
  }
  else{
    scrollsign.classList = "scrollsign";
  }

  if (scrollY > 700) {
    nav__sandwich.classList = "burger buractive"
    nav__ul.classList = "nav__ul white"
    manelli1.classList = "logonavfill active";
    manelli2.classList = "logonavfill active";
    manelli3.classList = "logonavfill active";
    nav__container.classList = "nav__container light";
    nav__list1.classList = "nav__li2";
    nav__list2.classList = "nav__li2";
    nav__list3.classList = "nav__li2";
    nav__list4.classList = "nav__li2";
    nav__list5.classList = "nav__li2";
    nav__list6.classList = "nav__li2";
  }
  if (scrollY < 700) {
    nav__sandwich.classList = "burger"
    nav__ul.classList = "nav__ul black"
    manelli1.classList = "logonavfill";
    manelli2.classList = "logonavfill";
    manelli3.classList = "logonavfill";
    nav__container.classList = "nav__container";
    nav__list1.classList = "nav__li";
    nav__list2.classList = "nav__li";
    nav__list3.classList = "nav__li";
    nav__list4.classList = "nav__li";
    nav__list5.classList = "nav__li";
    nav__list6.classList = "nav__li";
  }
});

window.onload = function () {
  let smoothclear = document.getElementById("smoothclear1");
  let svg__dot = document.getElementById("svg__dot1");
  let svg__logohero = document.getElementById("manelli__logoo1");
  let nav__ul = document.getElementById("nav__ul1");
  let nav__sandwich = document.getElementById("buractive");
  smoothclear.className = "smoothclear active";
  setTimeout(() => {
    svg__logohero.classList = "manelli__logohero active";
    svg__dot.classList = "svg__dot active";
    console.log("Página diseñada por Agustín Manelli");
  }, 100);
  let scrollY = this.scrollY;
  let nav__container = document.getElementById("nav__container1");
  let manelli1 = document.getElementById("logonavfill1");
  let manelli2 = document.getElementById("logonavfill2");
  let manelli3 = document.getElementById("logonavfill3");
  let nav__list1 = document.getElementById("nav__li1");
  let nav__list2 = document.getElementById("nav__li2");
  let nav__list3 = document.getElementById("nav__li3");
  let nav__list4 = document.getElementById("nav__li4");
  let nav__list5 = document.getElementById("nav__li5");
  let nav__list6 = document.getElementById("nav__li6");
  let scrollsign = document.getElementById("scrollsign1");

  if (scrollY < 150) {
    nav__container.style.boxShadow = "none";
  } else {
    nav__container.style = "none";
  }

  if (scrollY > 500){
    scrollsign.classList = "scrollsign off";
  }
  else{
    scrollsign.classList = "scrollsign";
  }

  if (scrollY > 700) {
    nav__sandwich.classList = "burger buractive"
    nav__ul.classList = "nav__ul white"
    manelli1.classList = "logonavfill active";
    manelli2.classList = "logonavfill active";
    manelli3.classList = "logonavfill active";
    nav__container.classList = "nav__container light";
    nav__list1.classList = "nav__li2";
    nav__list2.classList = "nav__li2";
    nav__list3.classList = "nav__li2";
    nav__list4.classList = "nav__li2";
    nav__list5.classList = "nav__li2";
    nav__list6.classList = "nav__li2";
  }
  if (scrollY < 700) {
    nav__sandwich.classList = "burger"
    nav__ul.classList = "nav__ul black"
    manelli1.classList = "logonavfill";
    manelli2.classList = "logonavfill";
    manelli3.classList = "logonavfill";
    nav__container.classList = "nav__container";
    nav__list1.classList = "nav__li";
    nav__list2.classList = "nav__li";
    nav__list3.classList = "nav__li";
    nav__list4.classList = "nav__li";
    nav__list5.classList = "nav__li";
    nav__list6.classList = "nav__li";
  }
};

//###############################  Efecto about  #################################
const typedTextSpan2 = document.querySelector(".about__effect");
const cursorSpan2 = document.querySelector(".cursor2");

const textArray2 = ["web", "UX-UI", "graphic", "corporate"];
const typingDelay2 = 100;
const erasingDelay2 = 50;
const newTextDelay2 = 2000; // Delay between current and next text
let textArrayIndex2 = 0;
let charIndex2 = 0;

function type2() {
  if (charIndex2 < textArray2[textArrayIndex2].length) {
    if (!cursorSpan2.classList.contains("typing"))
      cursorSpan2.classList.add("typing");
    typedTextSpan2.textContent +=
      textArray2[textArrayIndex2].charAt(charIndex2);
    charIndex2++;
    setTimeout(type2, typingDelay2);
  } else {
    cursorSpan2.classList.remove("typing");
    setTimeout(erase2, newTextDelay2);
  }
}

function erase2() {
  if (charIndex2 > 0) {
    if (!cursorSpan2.classList.contains("typing"))
      cursorSpan2.classList.add("typing");
    typedTextSpan2.textContent = textArray2[textArrayIndex2].substring(
      0,
      charIndex2 - 1
    );
    charIndex2--;
    setTimeout(erase2, erasingDelay2);
  } else {
    cursorSpan2.classList.remove("typing");
    textArrayIndex2++;
    if (textArrayIndex2 >= textArray2.length) textArrayIndex2 = 0;
    setTimeout(type2, typingDelay2 + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray2.length) setTimeout(type2, newTextDelay2 + 250);
});
//##############################################################################################
