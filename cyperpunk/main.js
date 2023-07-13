// =================== START NAVBAR ===================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
// =================== END NAVBAR ===================



// =================== START TYPING EFFECT ===================
var typed = new Typed(".inp", {
    strings: ["Cyberpunk 2077", "NFTs"],
    typeSpeed: 70,
    backSpeed: 100,
    loop: true
});
// =================== END TYPING EFFECT ===================


// =================== START SCROLL BTN ===================
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// =================== END SCROLL BTN ===================



// =================== START POPULAR IMG EFFECT ===================
const container = document.querySelector('#container');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})
// =================== START POPULAR IMG EFFECT ===================