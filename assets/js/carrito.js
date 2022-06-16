const carritoOne = JSON.parse(localStorage.getItem('carritoOne')) || [];

//CARRITO SECTION
let productCounter = document.querySelector('.num');
let subtotal = document.querySelector('#subtotal');
let precio = document.querySelector('#precio');

//CHECKOUT SECTION
let subtotalCheckOut = document.querySelector('.subtotalCheckOut');
let impuestosCheckOut = document.querySelector('.impuestosCheckOut');
let envioCheckOut = document.querySelector('.envioCheckOut');
let totalCheckOut = document.querySelector('.totalCheckOut');

//ON LOAD
// subtotalCheckOut.innerHTML = subtotal.innerHTML;
// totalCheckOut.innerHTML = parent(subtotalCheckOut.innerHTML) + 0 + 0;

//BUTTON EVENTS
const buttonMinus = document.querySelector('.min').addEventListener('click', function () {
  if (productCounter.innerHTML > 1) {
    productCounter.innerHTML--;
  }

  subtotal.innerHTML = precio.innerHTML * productCounter.innerHTML;
  subtotalCheckOut.innerHTML = parseInt(subtotal.innerHTML) + 0 + 0;
  totalCheckOut.innerHTML = parseInt(subtotalCheckOut.innerHTML) + 0 + 0;
});

const buttonPlus = document.querySelector('.plus').addEventListener('click', function () {
  productCounter.innerHTML++; //agregar stop de acuerdo al stock disponible

  subtotal.innerHTML = precio.innerHTML * productCounter.innerHTML;
  subtotalCheckOut.innerHTML = parseInt(subtotal.innerHTML) + 0 + 0;
  totalCheckOut.innerHTML = parseInt(subtotalCheckOut.innerHTML) + 0 + 0;
});

// let numeroFormat = document.querySelectorAll('.numeroFormat');

// for (let i = 0; i <= numeroFormat.length; i++) {
//   document.querySelectorAll('.numeroFormat')[i].innerHTML = '$ ' + document.querySelectorAll('.numeroFormat')[i].innerHTML.toLocaleString('es-AR');
// }

let cart = [];

const addToCart = (productoId) => {
  const item = stockProductos.find((producto) => producto.id === productoId);
  cart.push(item);
};
