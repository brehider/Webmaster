const header = document.getElementById('header');



header.addEventListener('click', function() {
  const randomColor = getRandomColor();
  header.style.backgroundColor = randomColor;
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}




// MENSAJE DE BIENVENIDA

const contactLink = document.getElementById('contacto');

contactLink.addEventListener('mouseover', function() {
  console.log('¡Bienvenido! Gracias por pasar el ratón sobre el enlace de contacto.');
});


