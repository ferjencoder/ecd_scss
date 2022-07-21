'use strict';

// //GET CART & FAVOURITES FROM LOCAL STORAGE
// let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // FETCH SELECTED FAVOURITE PRODUCT FROM LOCAL STORAGE
// let favouriteStored = JSON.parse(localStorage.getItem('itemFavourite'));
// let favouriteSelected = Number(favouriteStored.id);
// console.log(favouriteSelected);

console.log('PRODUCTOS', { cart });
console.log('PRODUCTOS', { favourites });

// GLOBAL SCOPE VARIABLES
// const btnFavourite = document.querySelector('.btnFavourite');
// const productList = document.getElementById('product-list');
const productTemplate = document.getElementById('product-template').content;
const fragment = document.createDocumentFragment();

const tmpProductoNombre = productTemplate.querySelector('.productoNombre');
const tmpProductoMaterial = productTemplate.querySelector('.productoMaterial');
const tmpProductoMedidas = productTemplate.querySelector('.productoMedidas');
const tmpProductoImg = productTemplate.querySelector('.productoImg');
const tmpProductoSwatch0 = productTemplate.querySelector('#productoSwatch0');
const tmpProductoSwatch1 = productTemplate.querySelector('#productoSwatch1');
const tmpProductoSwatch2 = productTemplate.querySelector('#productoSwatch2');
const tmpProductoSwatch3 = productTemplate.querySelector('#productoSwatch3');
const tmpProductoStock = productTemplate.querySelector('.productoStock');
const tmpBtnComprar = productTemplate.querySelector('.btnComprar');
const tmpBtnFavourite = productTemplate.querySelector('.btnFavourite');
const tmpToastProductoNombre = productTemplate.querySelector('.toastProductoNombre');

// AFTER DOM IS LOADED FETCH DATA FROM JSON
document.addEventListener('DOMContentLoaded', () => {
  fectchData();
});

const fectchData = async () => {
  try {
    const res = await fetch('../assets/js/api.json');
    const data = await res.json();
    renderProducts(data);
    // callFavourite(data);
    // setFavourites(data);
    console.log(data);
  } catch (error) {
    console.error('Disculpas! algo salió mal. Por favor, intente de nuevo o contacte al admin.');
    console.error(error);
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

// ADD LISTENER TO CLICKS IN PRODUCTS CONTAINER LIST
productList.addEventListener('click', (e) => {
  selectProduct(e);
});

// RENDER ALL PRODUCTS FROM JSON FETCHED DATA
const renderProducts = (data) => {
  productList.innerHTML = '';

  data.forEach((producto) => {
    tmpProductoNombre.textContent = producto.nombre;
    tmpProductoMaterial.textContent = 'Material: ' + producto.material;
    tmpProductoMedidas.textContent = 'Medidas: ' + producto.medidas;
    tmpProductoImg.setAttribute('src', producto.img500[0]);
    tmpProductoImg.setAttribute('alt', producto.descripcion);
    tmpProductoSwatch0.setAttribute('src', producto.img40[0]);
    tmpProductoSwatch1.setAttribute('src', producto.img40[1]);
    tmpProductoSwatch2.setAttribute('src', producto.img40[2]);
    tmpProductoSwatch3.setAttribute('src', producto.img40[3]);
    tmpProductoStock.textContent = producto.stock[0] + ' en stock';
    tmpBtnComprar.dataset.id = producto.id;
    tmpBtnComprar.textContent = '$ ' + producto.precio;
    tmpBtnComprar.href = '../pages/producto.html';
    tmpBtnFavourite.dataset.id = producto.id;
    tmpToastProductoNombre.textContent = producto.nombre;

    const clone = productTemplate.cloneNode(true);
    fragment.appendChild(clone);
  });

  productList.appendChild(fragment);
};

// EVENT TO CAPTURE CLICK ON ADD TO CART BTN
const selectProduct = function (e) {
  //e.preventDefault();
  e.target.stopPropagation;
  e.target.className.includes('btnComprar') ? setProduct(e.target.parentElement) : '';
};

const setProduct = (obj) => {
  console.log(obj);
  const producto = {
    id: obj.querySelector('.btnComprar').dataset.id,
  };
  console.log(producto);
  localStorage.setItem('itemCart', JSON.stringify(producto));
};

// const setFavourites = (e) => {
//   console.log(e);
//   const productoFavourite = {
//     id: e.querySelector('.btnFavourite').dataset.id,
//   };
//   localStorage.setItem('itemFavourite', JSON.stringify(productoFavourite));
// };

// const callFavourite = (data) => {
//   for (const producto of data) {
//     if (producto.id == itemFavourite) {
//     }
//   }
// };

// if (favourites.find((data) => data.id == productoFavourite.id)) {
//   console.log(data);
//   console.log('Funka');
// } else {
//   // favourites.push(productoFavourite);
//   localStorage.setItem('favourites', JSON.stringify(favourites));

//   // Swal.fire({
//   //   position: 'bottom-end',
//   //   html: '<i class="fa-solid fa-heart"></i> ' + `Agregaste: <b>${producto.nombre}</b> a tus favoritos! ` + '<a href="../pages/favoritos.html"><b>VER FAVORITOS</b></a> ' + '',
//   //   showConfirmButton: false,
//   //   iconColor: 'rgba(121, 85, 105, 1)',
//   //   width: 500,
//   //   padding: '2em',
//   //   background: 'rgba(255, 255, 255, 0.9)',
//   //   showCloseButton: true,
//   //   timer: 4000,
//   // });
// }
// console.log(favourites);
// // };
