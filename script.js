const botones = document.querySelectorAll(".filter-btn");
const productos = document.querySelectorAll(".product-card");

botones.forEach(boton => {
  boton.addEventListener("click", () => {

    // Activar botón
    botones.forEach(b => b.classList.remove("active"));
    boton.classList.add("active");

    const filtro = boton.dataset.filter;

    productos.forEach(producto => {

      const categoria = producto.getAttribute("data-category");

      if (filtro === "all" || categoria === filtro) {
        producto.style.display = "";
      } else {
        producto.style.display = "none";
      }

    });

  });
});


//E tio que rollo porque no sale jajajaj XDXDXDDXDDXXDDDDDDDDD