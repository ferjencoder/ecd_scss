/* CARRITO- CONTADOR PRODUCTOS*/
/* Suma o resta al agregar o quitar productos */

// let numeroFormat = document.querySelectorAll('.numeroFormat');

// for (let i = 0; i <= numeroFormat.length; i++) {
//   document.querySelectorAll('.numeroFormat')[i].innerHTML = '$ ' + document.querySelectorAll('.numeroFormat')[i].innerHTML.toLocaleString('es-AR');
// }

// precio.innerHTML = '$' + precio.innerHTML.toLocaleString('es-AR');
// subtotal.innerHTML = '$' + subtotal.innerHTML.toLocaleString('es-AR');

//CARRITO SECTION
let productCounter = document.querySelector('.num');
let subtotal = document.querySelector('#subtotal');
let precio = document.querySelector('#precio');

//CHECKOUT SECTION
let subtotalCheckOut = document.querySelector('.subtotalCheckOut');
let impuestosCheckOut = document.querySelector('.impuestosCheckOut');
let envioCheckOut = document.querySelector('.envioCheckOut');
let totalCheckOut = document.querySelector('.totalCheckOut');

const buttonMinus = document.querySelector('.min').addEventListener('click', function () {
  if (productCounter.innerHTML > 1) {
    productCounter.innerHTML--;
  }
  subtotal.textContent = '$' + (precio.innerHTML * productCounter.innerHTML).toLocaleString('es-AR');
});

const buttonPlus = document.querySelector('.plus').addEventListener('click', function () {
  productCounter.innerHTML++; //agregar stop de acuerdo al stock disponible
  subtotal.textContent = '$' + (precio.innerHTML * productCounter.innerHTML).toLocaleString('es-AR');
});
