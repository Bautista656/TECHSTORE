// Control de boton seleccionado
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remover clase active de todos
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Agregar clase active al clickeado
    button.classList.add('active');
  });
});


//E tio que rollo porque no sale jajajaj XDXDXDDXDDXXDDDDDDDDD