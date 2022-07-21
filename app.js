'use strict';

// FETCH CART AND FAVOURITES FROM LOCAL STORAGE
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favourites = JSON.parse(localStorage.getItem('favourites')) || [];

// FETCH SELECTED PRODUCT FROM LOCAL STORAGE AND PARSE
let productoStored = JSON.parse(localStorage.getItem('itemCart')) || '';
let productoSelected = Number(productoStored.id);

// FETCH SELECTED FAVOURITE PRODUCT FROM LOCAL STORAGE AND PARSE
let favouriteStored = JSON.parse(localStorage.getItem('itemFavourite')) || '';
let favouriteSelected = Number(favouriteStored.id);

console.log('APP.JS', { cart });
console.log('APP.JS', { favourites });

const productList = document.getElementById('product-list');
const cartItemsPill = document.getElementById('cartItemsPill');
const favouriteItemsPill = document.getElementById('favouriteItemsPill');
const offcanvasCartDropdown = document.getElementById('offcanvasCartDropdown');
const navbarCartDropdown = document.getElementById('navbarCartDropdown');
const cartMenuDropdown = document.getElementById('cartMenuDropdown');
const btnFavourite = document.querySelector('.btnFavourite');

// AFTER DOM IS LOADED FETCH DATA FROM JSON
document.addEventListener('DOMContentLoaded', () => {
  fectchJSONData();
});

const fectchJSONData = async () => {
  try {
    const res = await fetch('../assets/js/api.json');
    const dataJSON = await res.json();
    renderOffcanvasCart(dataJSON);
    console.log(dataJSON);
  } catch (error) {
    console.error('Disculpas! algo salió mal. Por favor, intente de nuevo o contacte al admin.');
    console.error(error);
  }
};

// RENDER OFFCANVAS CART && MENU DROPDOWN CART
const renderOffcanvasCart = (dataJSON) => {
  offcanvasCartDropdown.innerHTML = '';
  navbarCartDropdown.innerHTML = '';
  cartItemsPill.innerHTML = ''; //cart.length
  favouriteItemsPill.innerHTML = '';

  if (!favourites.length == null) {
    for (let i = 0; i < favourites.length; i++) {
      for (const producto of dataJSON) {
        if (producto.id == favourites[i].id) {
          const divHTLM = `
            <li class="list-group-item d-flex justify-content-between align-items-center position-relative">
              <figure class="p-0 m-0 align-self-center">
                <img class="ps-1" src="${producto.img100[0]}" width="100" height="100" alt="${producto.descripcion}" />
              </figure>
              <div class="container d-flex flex-column align-items-start ps-2">
                <h6 class="text-uppercase pt-1 text-primary m-0">${producto.nombre}</h6>
                <p class="m-0 p-0"><small>Color: ${producto.colors[0]}</small></p>
                <p class="m-0 p-0"><small>Material: ${producto.material}</small></p>
                <p class="m-0 p-0">Precio: ${producto.precio}</p>
              </div>
              <span class="badge bg-success rounded-pill text-dark position-absolute top-0 end-0 m-2">${producto.stock[0]}</span>
            </li>`;
          //RENDER PRODUCTS IN MOBILE OFFCANVAS NAVBAR'S CART ICON
          offcanvasCartDropdown.innerHTML += divHTLM;

          //RENDER PRODUCTS IN NAVBAR'S CART DROPDOWN
          navbarCartDropdown.innerHTML += divHTLM;
        }
      }
    }
  } else {
    //RENDER PRODUCTS IN MOBILE OFFCANVAS NAVBAR'S CART ICON
    offcanvasCartDropdown.innerHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-center position-relative">
              <div class="container d-flex flex-column align-items-start ps-2">
                <h6 class="text-uppercase pt-1 text-primary m-0">Tu carrito está vacío</h6>
              </div>
            </li>
          `;

    //RENDER PRODUCTS IN NAVBAR'S CART DROPDOWN
    navbarCartDropdown.innerHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-center position-relative">
              <div class="container d-flex flex-column align-items-start ps-2">
                <h6 class="text-uppercase pt-1 text-primary m-0">Tu carrito está vacío</h6>
              </div>
            </li>
          `;
  }

  cartItemsPill.innerHTML = cart.length; //cart.length
  favouriteItemsPill.innerHTML = cart.length; //cart.length
  console.log('CART ITEM PILLS', cartItemsPill.innerHTML);
  console.log('FAVOURITE ITEM PILLS', favouriteItemsPill.innerHTML);

  // FAVOURITES
  productList.addEventListener('click', (e) => {
    e.target.className.includes('btnFavourite') ? setFavourites(e.target.parentElement.parentElement) : '';
    e.stopPropagation;
    addToFavourites();
  });

  const addToFavourites = (producto) => {
    console.log(producto);

    if (favourites.find((producto) => (producto.id = favouriteSelected))) {
    } else {
      favourites.push(producto);
      localStorage.setItem('favourites', JSON.stringify(favourites));
      console.log(favourites);
    }
  };

  const setFavourites = (e) => {
    console.log(e);
    const productoFavourite = {
      id: e.querySelector('.btnFavourite').dataset.id,
    };
    localStorage.setItem('itemFavourite', JSON.stringify(productoFavourite));
  };

  const callFavourite = (dataJSON) => {
    for (const producto of dataJSON) {
      if (producto.id == itemFavourite) {
        console.log(dataJSON);
        console.log('Funka');
      } else {
        // favourites.push(productoFavourite);
        localStorage.setItem('favourites', JSON.stringify(favourites));
      }
    }
  };
};

//info ////////////////////////////////////////////////////////////
//info START RESIDUAL CODE TO BE DECIDED

// Swal.fire({
//   position: 'bottom-end',
//   html: '<i class="fa-solid fa-heart"></i> ' + `Agregaste: <b>${producto.nombre}</b> a tus favoritos! ` + '<a href="../pages/favoritos.html"><b>VER FAVORITOS</b></a> ' + '',
//   showConfirmButton: false,
//   iconColor: 'rgba(121, 85, 105, 1)',
//   width: 500,
//   padding: '2em',
//   background: 'rgba(255, 255, 255, 0.9)',
//   showCloseButton: true,
//   timer: 4000,
// });
//   }
//   console.log(favourites);
// }

//<<<-- HIDE BANNER MSG ------------------------------------------------------------------------>
// let lastScrollTop = 1;
// bannerMsg = document.getElementById('bannerMsg');
// bannerMsg = document.getElementById('bannerMsg');
// window.addEventListener('scroll', function () {
//   let scrollTop = this.window.scrollX || document.documentElement.scrollTop;
//   if (scrollTop > lastScrollTop) {
//     bannerMsg.className = 'd-none';
//     lastScrollTop = 1;
//     scrollTop = 1;
//   } else if ((scrollTop = lastScrollTop)) {
//     bannerMsg.className = 'd-none';
//   }
//   lastScrollTop = scrollTop;
// });

//info END RESIDUAL CODE TO BE DECIDED
//info ////////////////////////////////////////////////////////////

//<<<-- COPYRIGHT ------------------------------------------------------------------------>
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
