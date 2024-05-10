document.getElementById('mostrarSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var button = document.getElementById('mostrarSidebar');
    
    if (sidebar.style.right === '-200px') {
        sidebar.style.right = '0';
        button.innerText = '|||';
        button.style.backgroundColor = '#191919'; // Cambia el color de fondo al abrir el sidebar
    } else {
        sidebar.style.right = '-200px';
        button.innerText = '|||';
        button.style.backgroundColor = 'initial'; // Restaura el color de fondo al cerrar el sidebar
    }
});



function mostrarTexto() {
  var texto = document.getElementById('texto2');
  if (texto.style.display === 'none') {
    texto.style.display = 'block';
  } else {
    texto.style.display = 'none';
  }
}

function mostrarImagen() {
  document.getElementById("imagen").style.display = "block";
  document.getElementById("botonCerrar").style.display = "block";
  document.getElementById("botonImagen").style.display = "none";
}

function cerrarImagen() {
  document.getElementById("imagen").style.display = "none";
  document.getElementById("botonCerrar").style.display = "none";
  document.getElementById("botonImagen").style.display = "block";
}



const botones = document.querySelectorAll('button');

botones.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    btn.style.backgroundColor = color;
  });

  btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'initial';
  });
});

