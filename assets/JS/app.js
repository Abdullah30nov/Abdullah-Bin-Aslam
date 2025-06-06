// Store the particles configuration separately
let particlesConfig = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
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
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#000000",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
};

particlesJS('particles-js', particlesConfig);

document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark');
    toggleColors();
  });

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark');
    toggleColors();
  }
});

function toggleColors() {
  // Toggle color values
  particlesConfig.particles.color.value = particlesConfig.particles.color.value === '#000000' ? '#ffffff' : '#000000';
  particlesConfig.particles.line_linked.color = particlesConfig.particles.line_linked.color === '#000000' ? '#ffffff' : '#000000';

  // Update particles
  particlesJS('particles-js', particlesConfig);
}

// <script>
const countEl = document.getElementById('count');

// // Get the existing view count from localStorage
// let viewCount = localStorage.getItem('viewCount');
// console.log("data" , viewCount)
// // If not present, initialize to 1
// if (!viewCount) {
//   viewCount = 1;
// } else {
//   // If present, increment
//   viewCount = parseInt(viewCount) + 1;
// }

// // Save updated count back to localStorage
// localStorage.setItem('viewCount', viewCount);

// // Update the DOM
// countEl.innerHTML = viewCount;
// {/* </script> */ }
// {/* // const relo = true
//   // if(relo === true){ */}
// {/* // } */ }


const Arrafy = []
function Aldl (){
  console.log("hello world")
  const obj = {
    view:1
  }
  Arrafy.push()
}
Aldl()