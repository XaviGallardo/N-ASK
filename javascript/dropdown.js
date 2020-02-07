var code = document.getElementById('code');
var vector = document.getElementById('vector');
var dropdownCode = document.getElementById('dropdownCode');

var secciones = document.getElementById('secciones');
var footerSecciones = document.getElementById('footer-secciones');

var legal = document.getElementById('footer-title');
var legales = document.getElementById('legales');

var contacto = document.getElementById('contacto');
var contactoDatos = document.getElementById('contactoDatos');

console.log('legales', legales);

contacto.onclick = function () {
  var width = document.documentElement.clientWidth;

  if (width <= 768) {
    if (contactoDatos.classList.contains('not-show')) {
      contactoDatos.classList.remove('not-show');
    } else {
      contactoDatos.classList.add('not-show');
    }
  }
};

legal.onclick = function () {
  var width = document.documentElement.clientWidth;

  if (width <= 768) {
    if (legales.classList.contains('not-show')) {
      legales.classList.remove('not-show');
    } else {
      legales.classList.add('not-show');
    }
  }
};

secciones.onclick = function () {
  var width = document.documentElement.clientWidth;
  // console.log('Width', width);

  if (width <= 768) {
    if (footerSecciones.classList.contains('not-show')) {
      footerSecciones.classList.remove('not-show');
    } else {
      footerSecciones.classList.add('not-show');
    }
  }
};

code.onclick = function () {
  event.preventDefault();
  // console.log('event CODE', event.target);

  if (event.target === vector && code.classList.contains('active')) {
    code.classList.remove('active');
    dropdownCode.style.display = 'none';
  } else {
    code.classList.add('active');
    dropdownCode.style.display = 'block';
  }
  if (code.classList.contains('active')) {
    vector.setAttribute('style', 'transform: rotate(' + 180 + 'deg)');
  } else {
    vector.setAttribute('style', 'transform: none');
  }
};

// NOTA XGZ -> Codigo repetido, mirar para no repetir código