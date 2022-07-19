'use strict';
//GET CART & FAVOURITES FROM LOCAL STORAGE
let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const favouriteBtn = document.querySelector('.btn-favourite');
const productList = document.getElementById('product-list');
const productTemplate = document.getElementById('product-template').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
  fectchData();
});

const fectchData = async () => {
  try {
    const res = await fetch('../assets/js/api.json');
    const data = await res.json();
    renderProducts(data);
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

// ADD LISTENER TO CLICKS IN
productList.addEventListener('click', (e) => {
  selectProduct(e);
});

// RENDER ALL PRODUCTS FROM JASON FETCHED DATA
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

    const clone = productTemplate.cloneNode(true);
    fragment.appendChild(clone);
  });
  productList.appendChild(fragment);
};

// EVENT TO CAPTURE CLICK ON ADD TO CART BTN
const selectProduct = (e) => {
  e.target.className.includes('btn-comprar') ? setProduct(e.target.parentElement) : '';
  e.target.stopPropagation;
  console.log(e);
};

const setProduct = (obj) => {
  console.log(obj);
  const producto = {
    id: obj.querySelector('.btn-comprar').dataset.id,
  };
  localStorage.setItem('itemCart', JSON.stringify(producto));
};

// FAVOURITES
productList.addEventListener('click', (e) => {
  addToFavourites(e);
});

const addToFavourites = (e) => {
  e.target.className.includes('btn-favourite') ? setFavourites(e.target.parentElement.parentElement) : '';
  e.stopPropagation;
};

const setFavourites = (obj) => {
  console.log(obj);
  const productoFavourite = {
    id: obj.querySelector('.btn-favourite').dataset.id,
  };
  localStorage.setItem('itemFavourite', JSON.stringify(productoFavourite));

  if (favourites.find((data) => data.id == productoFavourite.id)) {
    console.log('Funka');
  } else {
    favourites.push(productoFavourite);
    localStorage.setItem('favourites', JSON.stringify(favourites));

    Swal.fire({
      position: 'bottom-end',
      html: '<i class="fa-solid fa-heart"></i> ' + `Agregaste: <b>${producto.nombre}</b> a tus favoritos! ` + '<a href="../pages/favoritos.html"><b>VER FAVORITOS</b></a> ' + '',
      showConfirmButton: false,
      iconColor: 'rgba(121, 85, 105, 1)',
      width: 500,
      padding: '2em',
      background: 'rgba(255, 255, 255, 0.9)',
      showCloseButton: true,
      timer: 4000,
    });
  }
  console.log(favourites);
};
