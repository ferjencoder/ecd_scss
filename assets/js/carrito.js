'use strict';

// FETCH CART FROM LOCAL STORAGE
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// FETCH SELECTED PRODUCT FROM LOCAL STORAGE
let productoStored = JSON.parse(localStorage.getItem('itemCart'));
let productoSelected = Number(productoStored.id);

// WAIT FOR DOCUMENT TO LOAD TO CALL FETCH
document.addEventListener('DOMContentLoaded', () => {
  renderCartItems(cart);
  renderCartSummary(cart);
});

// RENDER CART
const cartTable = document.querySelector('#cartTable');
const cartSummary = document.querySelector('#cartSummary');

const renderCartItems = (cart) => {
  cartTable.innerHTML = '';

  cart.forEach((cartItem) => {
    cartTable.innerHTML += `
      <tr>
        <th scope="row">
          <img class="cartItemThumbnail me-2 my-2" src="${cartItem.img100[0]}" alt="${cartItem.descripcion}" />
        </th>
        <td class="text-start detalles">
          <strong class="product-item-name">
            <a href="#" class="text-decoration-none text-start">${cartItem.nombre}</a>
          </strong>
          <dl class="item-options d-flex flex-column m-0">
            <dd class="text-muted text-start my-1">COLOR: ${cartItem.colors[0]}</dd>
            <dd class="text-muted text-start my-1">TAMAÑO: ${cartItem.alto}cm x ${cartItem.ancho}cm</dd>
          </dl>
        </td>
        <td class="text-center numeroFormat" id="precio">${cartItem.precio}</td>
        <td class="text-center">
          <div class="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group" role="group" aria-label="First group">
              <button type="button" class="btn ecd-btn-counter-hover min">-</button>
              <button class="d-block btn ecd-btn-counter num">1</button>
              <button type="button" class="btn ecd-btn-counter-hover plus">+</button>
            </div>
          </div>
        </td>
        <td class="text-center numeroFormat" id="subtotal">${cartItem.precio}</td>
        <td>
          <button type="button" class="btn shadow-none eliminarProducto onclick='eliminar(${cartItem.id}" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
        </td>
      </tr>    
`;
  });
  document.querySelector('.eliminarProducto').onclick = function () {
    eliminar(cart);
  };
};

const renderCartSummary = (cart) => {
  let subtotal = 0;
  console.log(cart);
  cart.forEach((cartItem) => {
    console.log(cartItem.precio);
    subtotal += Number(cartItem.precio);
    console.log(subtotal);
  });

  cartSummary.innerHTML = '';

  cartSummary.innerHTML = `
  <tr>
    <td>SUBTOTAL</td>
    <td class="text-end subtotalCheckOut numeroFormat">${subtotal}</td>
  </tr>
  <tr>
    <td>IMPUESTOS</td>
    <td class="text-end impuestosCheckOut numeroFormat">0</td>
  </tr>
  <tr>
    <td>COSTO DE ENVÍO</td>
    <td class="text-end envioCheckOut numeroFormat">0</td>
  </tr>
  <tr>
    <td class="fw-bold">TOTAL</td>
    <td class="text-end fw-bold totalCheckOut numeroFormat">${subtotal}</td>
  </tr>
  `;
};

function eliminar(cart) {
  console.log(cart);

  cart.forEach((cartItem) => {
    console.log(cartItem);
    // let indice = cart.findIndex((cartItem) => cartItem.id == id);
    if (cart.find((cartItem) => cartItem.id)) console.log(id.id);
    //console.log(prod);
    console.log(indice);
    carrito.splice(indice, 1); //eliminando del carro
    let fila = document.getElementById(`fila${id}`);
    document.getElementById('tablaBody').removeChild(fila); //eliminando de la tabla
    document.getElementById('gastoTotal').innerText = `Total: $ ${calcularTotal()}`;
    localStorage.setItem('carrito', JSON.stringify(carrito));
  });
}

//todo CONVERT NUMBERS TO ARS
//todo SETTING UP DETAILED MESSAGE WHEN FINALIZAR COMPRA IS CLICKED
