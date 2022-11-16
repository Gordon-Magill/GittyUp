var nav = document.getElementById('menu');
var header = document.getElementsByTagName('header')

window.addEventListener('scroll', function() {
  if (window.scrollY >=400) { // adjust this value based on site structure and header image height
    nav.classList.add('navbar-sticky');
    header.classList.add('pt-scroll');
  } else {
    nav.classList.remove('navbar-sticky');
    header.classList.remove('pt-scroll');
  }
});

function navToggle() {
        var btn = document.getElementById('hamBtn');
        var nav = document.getElementById('menu');

        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    }
