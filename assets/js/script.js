let carrito = [];
let lista = document.getElementById('mi lista');

//llama a renderizar
renderizarProductos();

function renderizarProductos() {
  for (const producto of productos) {
    lista.innerHTML += `
    producto
    `;
  }
}

productos.forEach((producto) => {
  document.getElementById(`btn${producto.id}`).addEventListener('click', function () {
    agregarAlCarrito(producto);
  });
});

function agregarAlCarrito(productoNuevo) {
  carrito.push(productoNuevo);
  console.log(carrito);
  document.getElementById('tablabody').innerHTML += `
  <tr>
      <td>${productoNuevo.id}</td>
      <td>${productoNuevo.tipo}</td>
      <td>${productoNuevo.precio}</td>
  </tr>
  `;
  localStorage.setItem('carrito', JSON.stringify(carrito));
}
