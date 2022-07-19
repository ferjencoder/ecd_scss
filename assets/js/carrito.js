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
              <button class="d-block btn ecd-btn-counter num">${cartItem.cantidad}</button>
              <button type="button" class="btn ecd-btn-counter-hover plus">+</button>
            </div>
          </div>
        </td>
        <td class="text-center numeroFormat" id="subtotal">${cartItem.precio}</td>
        <td>
          <button type="button" class="btn shadow-none eliminarProducto" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
        </td>
      </tr>    
`;
  });
};

const renderCartSummary = (cart) => {
  cartSummary.innerHTML = '';

  cartSummary.innerHTML = `
  <tr>
    <td>SUBTOTAL</td>
    <td class="text-end subtotalCheckOut numeroFormat">0</td>
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
    <td class="text-end fw-bold totalCheckOut numeroFormat">0</td>
  </tr>
  `;
};
