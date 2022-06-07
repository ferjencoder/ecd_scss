let productCounter = document.querySelector('.num');
let subtotal = document.querySelector('.subtotal');
let precio = document.querySelector('.precio');
const buttonMinus = document.querySelector('.min').addEventListener('click', function () {
  productCounter.innerHTML--;
  let subtotalP = precio.innerHTML * productCounter.innerHTML;
  subtotal.innerHTML = subtotalP;
});

const buttonPlus = document.querySelector('.plus').addEventListener('click', function () {
  productCounter.innerHTML++;
  let subtotalP = precio.innerHTML * productCounter.innerHTML;
  subtotal.innerHTML = subtotalP;
});
