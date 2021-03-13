// --- particle js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 88,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 15
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.5,
        "opacity_min": 0.15,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.15,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#33b1f8",
      "opacity": 0.25,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 10,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 1
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


// --- toggle menu mobile
$('.toggle').click(function () {
  $(this).toggleClass('active');
  $('.menus').toggleClass('open');
})
$('.menus a').click(function () {
  $('.toggle').removeClass('active');
  $('.menus').removeClass('open');
})

// --- backto top
var toTop = document.getElementById("to-top");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// --- cursor animation

// --- scroll reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  // reset: true
});

sr.reveal('.home .box-text');
sr.reveal('.home .box-text > a', { delay: 200 });
sr.reveal('.home .box-img', { delay: 500 });
sr.reveal('.home-socials a', { interval: 200 });

sr.reveal('.about .about-img');
sr.reveal('.about h2.title', { interval: 100 });
sr.reveal('.about .about-text', { delay: 200, interval: 200 });
sr.reveal('.about .education', { interval: 200 });
sr.reveal('.about .education .card-edu', { interval: 200 });
sr.reveal('.about .ability', { interval: 300 });
sr.reveal('.about .ability .card-ability', { interval: 300 });

sr.reveal('.project h2.title');
sr.reveal('.card-project', { interval: 200 });

sr.reveal('.contact h2', { delay: 200 });
sr.reveal('.contact-wrap', { delay: 400 });
sr.reveal('.contact-wrap .socials a', { interval: 200 });


// /*===== MENU SHOW =====*/ 
// const showMenu = (toggleId, navId) =>{
//   const toggle = document.getElementById(toggleId),
//   nav = document.getElementById(navId)

//   if(toggle && nav){
//       toggle.addEventListener('click', ()=>{
//           nav.classList.toggle('show')
//       })
//   }
// }
// showMenu('nav-toggle','nav-menu')

// /*===== ACTIVE AND REMOVE MENU =====*/
// const navLink = document.querySelectorAll('.nav__link');   

// function linkAction(){
// /*Active link*/
// navLink.forEach(n => n.classList.remove('active'));
// this.classList.add('active');

// /*Remove menu mobile*/
// const navMenu = document.getElementById('nav-menu')
// navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction));