'use strict';
//PENSAR PARA FAVOURITES
let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

//localStorage.setItem('item', JSON.stringify(producto));

const productList = document.getElementById('product-list'); //items
const productTemplate = document.getElementById('product-template').content; //templateCard
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
  fectchData();
});

productList.addEventListener('click', (e) => {
  selectProduct(e);
});

const fectchData = async () => {
  try {
    const res = await fetch('../assets/js/api.json');
    const data = await res.json();
    renderProducts(data);
  } catch (error) {
    console.log(error);
  }
};

/* //! crear for para iterar sobre los swatches y crear elements hasta 5 y luego añadir un
//! "+3 más" text como link que lleve al producto tmb
//* console.log(producto.id + " " + producto.colors.length);

//* producto.colors.length >= 4 ? console.log(`${producto.id} + mayor que 4`) : console.log(`${producto.id} + menor que 4`);

//"colors": ["arcilla", "cambray", "eucaliptus", "lino"],

// if (producto.colors.length >= 4) {
//   for (let i = 0; i <= producto.colors.length; i++) {
//     console.log("#product-swatch" + i);
//     console.log(producto.img40[i]);
//     productTemplate.querySelector("#product-swatch" + i).setAttribute("src", producto.img40[i]);
//   }
// }

// producto.colors.length >= 4 ? for (let i = 0; i <= producto.colors.length; i++) {
//     productTemplate.querySelector(`#product-swatch[${i}] `).setAttribute('src', producto.colors[i]);
//   } :  console.log(error);
 */

const renderProducts = (data) => {
  productList.innerHTML = '';
  data.forEach((producto) => {
    productTemplate.querySelector('#product-name').textContent = producto.nombre;
    productTemplate.querySelector('#product-material').textContent = 'Material: ' + producto.material;
    productTemplate.querySelector('#product-alto').textContent = 'Medidas: ' + producto.medidas;
    productTemplate.querySelector('.product-img').setAttribute('src', producto.img500[0]);
    productTemplate.querySelector('.product-img').setAttribute('alt', producto.descripcion);
    productTemplate.querySelector('#product-swatch0').setAttribute('src', producto.img40[0]);
    productTemplate.querySelector('#product-swatch1').setAttribute('src', producto.img40[1]);
    productTemplate.querySelector('#product-swatch2').setAttribute('src', producto.img40[2]);
    productTemplate.querySelector('#product-swatch3').setAttribute('src', producto.img40[3]);
    productTemplate.querySelector('#stock').textContent = producto.stock[0] + ' en stock';
    productTemplate.querySelector('.btn-comprar').dataset.id = producto.id;
    productTemplate.querySelector('.btn-comprar').textContent = '$ ' + producto.precio;
    productTemplate.querySelector('.btn-comprar').href = '../pages/producto.html';
    productTemplate.querySelector('.btnFavourite').dataset.id = producto.id;
    productTemplate.querySelector('#toast-body').textContent = producto.nombre;
    //console.log(producto);
    const clone = productTemplate.cloneNode(true);
    fragment.appendChild(clone);
  });
  productList.appendChild(fragment);
};

const selectProduct = (e) => {
  e.target.className.includes('btn-comprar') ? setProduct(e.target.parentElement) : '';
  e.target.stopPropagation;
  console.log(e.target.parentElement);
  //console.log(cart);
};

const setProduct = (obj) => {
  console.log(obj);
  const producto = {
    id: obj.querySelector('.btn-comprar').dataset.id,
  };

  //cart.includes(producto) ? cart.splice(producto) : cart.push(producto);
  console.log(producto);
  console.log(cart);
  localStorage.setItem('item', JSON.stringify(producto));
};

// let btnFavouriteArray = [];

// btnFavouriteArray = document.querySelectorAll('btn-favourite');

// console.log(btnFavouriteArray);

// $('btn-comprar').hover(function (event) {
//   e.target.content = 'comprar';
// });

// FAVOURITES
//let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
//const favouriteBtn = document.querySelector(".btn-favourite"); //items
productList.addEventListener('click', (e) => {
  //console.log(e);
  addToFavourites(e);
});

const addToFavourites = (e) => {
  e.target.className.includes('btn-favourite') ? setFavourites(e.target.parentElement.parentElement) : '';
  e.stopPropagation;
  // console.log(e.target);
  //console.log(favourites);
};

const setFavourites = (obj) => {
  //console.log(obj);
  const producto = {
    id: obj.querySelector('.btn-favourite').dataset.id,
  };

  if (favourites.includes(producto)) {
    console.log('Funka');
  } else {
    favourites.push(producto);
    localStorage.setItem('item', producto);
    console.log(localStorage);
  }

  //favourites.includes(producto) ? console.log("yes") : favourites.push(producto);
  // console.log(producto);
  console.log('Favourites');
  console.log(favourites);
};
