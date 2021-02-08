const navbar = document.getElementById("navbar");
const txt = document.querySelector(".wrapper");
const svi = document.querySelectorAll(".wrapper");
const cert = document.querySelector(".certifikat");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".listaMob li");
const hamburger = document.querySelector(".burger");
// svi.push.cert;

window.onscroll = function () {
  skrolovanje();
  // logika za fade-in harmonika u 'aktivnosti' sekciji
  svi.forEach((element) => {
    let hT = element.offsetTop;
    let hH = element.offsetHeight;
    let wH = window.innerHeight;
    let wS =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    // console.log(hT, hH, wH, wS);
    // console.log(wS, hT + hH - wH);
    fadeIn(hT, hH, wH, wS, element);
  });
};
// f-ja za navbar
function skrolovanje() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // console.log("skrolovano!");
    navbar.classList.remove("hide");
  } else {
    navbar.classList.add("hide");
    uvlacenjeNav();
  }
}
// uvlacenje navigacije kada se navbar uvuce
function uvlacenjeNav() {
  mobilniBlok.classList.remove("pomeraj");
  hamburger.classList.remove("toggle");
  links.forEach((link) => {
    link.classList.remove("fade");
  });
}
// f-ja za fejdovanje linkova u mob navbaru
function fadeLinks() {
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
}

function fadeIn(hT, hH, wH, wS, element) {
  if (wS > hT + hH - wH) {
    element.classList.add("visible");
  }
}

//logika za dugmence i spustanje ostatka teksta ("harmonika")
let dugme = document.querySelectorAll(".fa-times-circle");
let paragraf = document.querySelectorAll(".otkrij");
for (let i = 0; i < paragraf.length; i++) {
  let elEl = paragraf[i];
  let elDugme = dugme[i];
  elDugme.addEventListener("click", () => {
    elDugme.classList.toggle("rotated");
    elEl.classList.toggle("hide_aktivnosti");
  });
}

// logika za mobilnu navigaciju, klik na burger
const burger = document.querySelector(".burger");
const mobilniBlok = document.querySelector(".mobilniblok");
burger.addEventListener("click", () => {
  mobilniBlok.classList.toggle("pomeraj");
  fadeLinks();
  hamburger.classList.toggle("toggle");
});

// deo koda koji se odnosi na underline sa intersection observer
const options = {
  threshold: 0.45,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor =
      document.querySelector(`[data-page=${className}]`) != null
        ? document.querySelector(`[data-page=${className}]`)
        : null;
    if (entry.isIntersecting && activeAnchor !== null) {
      // console.log(className, activeAnchor);
      activeAnchor.classList.add("active");
    } else {
      try {
        activeAnchor.classList.remove("active");
      } catch (error) {
        console.log("nastao neki problem");
      }
    }
    // console.log(className);
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
