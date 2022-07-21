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

// console.log('APP.JS', { cart });
// console.log('APP.JS', { favourites });
// console.log('APP.JS', { productoSelected });

const productList = document.getElementById('product-list');

// CART NAVBAR DROPDOWN
const cartItemsPill = document.getElementById('cartItemsPill');
const offcanvasCartDropdown = document.getElementById('offcanvasCartDropdown');
const navbarCartDropdown = document.getElementById('navbarCartDropdown');
const cartMenuDropdown = document.getElementById('cartMenuDropdown');

// CART NAVBAR DROPDOWN
const btnFavourite = document.querySelector('.btnFavourite');
const favouriteItemsPill = document.getElementById('favouriteItemsPill');
const offcanvasFavouritesDropdown = document.querySelector('.offcanvasFavouritesDropdown');
const favouritesMenuDropdown = document.querySelector('.favouritesMenuDropdown');

// AFTER DOM IS LOADED FETCH DATA FROM JSON
document.addEventListener('DOMContentLoaded', () => {
  fectchDataJSON();
});

const fectchDataJSON = async () => {
  try {
    const res = await fetch('../assets/js/api.json');
    const dataJSON = await res.json();
    renderOffcanvasCart(dataJSON);
    renderFavourites(dataJSON);
    // console.log('APP.JS FETCH: ', { dataJSON });
  } catch (error) {
    console.error(`Disculpas! algo salió mal. Por favor, intente de nuevo o contacte al admin.`);
    console.error(error);
  }
};

productList.addEventListener('click', (e) => {
  selectFavourite(e);
});

// RENDER OFFCANVAS CART && MENU DROPDOWN CART
const renderOffcanvasCart = (dataJSON) => {
  offcanvasCartDropdown.innerHTML = '';
  navbarCartDropdown.innerHTML = '';
  cartItemsPill.innerHTML = ''; //cart.length

  if (!cart.length == 0) {
    for (let i = 0; i < cart.length; i++) {
      for (const producto of dataJSON) {
        if (producto.id == cart[i].id) {
          console.log(producto.id == cart[i].id);
          let divHTLM = `
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
            </li>
            `;

          //RENDER PRODUCTS IN MOBILE OFFCANVAS NAVBAR'S CART ICON
          offcanvasCartDropdown.innerHTML += divHTLM;

          //RENDER PRODUCTS IN NAVBAR'S CART DROPDOWN
          navbarCartDropdown.innerHTML += divHTLM;
        }
      }
    }
  } else {
    let divHTML = `
      <li class="list-group-item d-flex justify-content-between align-items-center position-relative">
        <div class="container d-flex flex-column align-items-start ps-2">
          <h6 class="text-uppercase pt-1 text-primary m-0">Tu carrito está vacío</h6>
        </div>
      </li>
    `;

    //RENDER PRODUCTS IN MOBILE OFFCANVAS NAVBAR'S CART ICON
    offcanvasCartDropdown.innerHTML = divHTML;

    //RENDER PRODUCTS IN NAVBAR'S CART DROPDOWN
    navbarCartDropdown.innerHTML = divHTML;
  }

  cartItemsPill.innerHTML = cart.length; //cart.length
  console.log('CART ITEM PILLS', cartItemsPill.innerHTML);
};

const renderFavourites = (dataJSON) => {
  offcanvasFavouritesDropdown.innerHTML = '';
  favouritesMenuDropdown.innerHTML = '';
  console.log('FAVOURITE ITEM PILLS', favouriteItemsPill.innerHTML);
  favouriteItemsPill.innerHTML = favourites.length; //cart.length

  for (const favourite of dataJSON) {
    if (favourite.id == favouriteSelected) {
      // FINISHING MAGIC HAPPENS HERE
    }
  }

  // EVENT TO CAPTURE CLICK ON ADD TO FAVOURITES BTN
  const selectFavourite = function (e) {
    e.target.stopPropagation;
    e.target.className.includes('btnFavourite') ? setFavourites(e.target.parentElement.parentElement) : '';
  };
};

const setFavourites = (e) => {
  console.log(e);
  const productoFavourite = {
    id: e.querySelector('.btnFavourite').dataset.id,
  };
  localStorage.setItem('itemFavourite', JSON.stringify(productoFavourite));
};

// console.log('APP DATAJSON', dataJSON); // UNDEFINED

const addToFavourites = (dataJSON) => {
  console.log(favouriteSelected);
  console.log(dataJSON);

  for (const favourite of dataJSON) {
    if (favourites.find((favourite) => (favourite.id = favouriteSelected))) {
    } else {
      favourites.push(favourite);
      localStorage.setItem('favourites', JSON.stringify(favourites));
      console.log(favourites);
    }
  }
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

//todo ////////////////////////////////////////////////////////////
//todo // 1. ADD => favouriteItemsPill.innerHTML = '';

//info ////////////////////////////////////////////////////////////
//info // 1. START RESIDUAL CODE TO BE DECIDED

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
