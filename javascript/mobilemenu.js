var mobileMenu = document.getElementById("mobile-menu");
var body = document.getElementById("body");

mobileMenu.onclick = function () {

  if (body.classList.contains('show-menu')) {
    body.classList.remove('show-menu');
  } else {
    body.classList.add('show-menu');

  }

};