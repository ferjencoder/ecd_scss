'use strict';

// let dataJSON = [];
// FETCH CART AND FAVOURITES FROM LOCAL STORAGE
// let dataJSON = JSON.parse(localStorage.getItem('productsArray')) || [];
// FETCH CART AND FAVOURITES
let cart = JSON.parse(localStorage.getItem('cart')) || [],
  favourites = JSON.parse(localStorage.getItem('favourites')) || [],
  // FETCH SELECTED PRODUCT
  productoStored = JSON.parse(localStorage.getItem('itemCart')) || '',
  productoSelected = Number(productoStored.id),
  // FETCH SELECTED FAVOURITE
  favouriteStored = JSON.parse(localStorage.getItem('itemFavourite')) || '',
  favouriteSelected = Number(favouriteStored.id);

// // CREATE PRODUCTS ARRAY AND STORE IN LOCAL
// const createProductsArray = (dataJSON) => {
//   //let productsArray = [];
//   dataJSON.forEach((product) => {
//     productsArray.push(product);
//   });
//   return productsArray;
//   console.log('ProductsArray: ', productsArray);
//   // localStorage.setItem('productsArray', JSON.stringify(productsArray));
// };
// //console.log({ productsArray });

// /////////////////////////////////////////////////////////////////////////////////////
// GLOBAL SCOPE VARRIABLES
// CART VARIABLES
//const tmpCart = productTemplate.querySelector('.btnComprar');
const cartItemsPill = document.getElementById('cartItemsPill'),
  offcanvasCartDropdown = document.getElementById('offcanvasCartDropdown'), // MAGIC HAPPENS HERE
  navbarCartDropdown = document.getElementById('navbarCartDropdown'), // MAGIC HAPPENS HERE
  cartMenuDropdown = document.getElementById('cartMenuDropdown'); // TOGGLE

// FAVOURITES NAVBAR DROPDOWN
const btnFavourite = document.querySelector('.btnFavourite'),
  favouriteItemsPill = document.getElementById('favouriteItemsPill'),
  offcanvasFavouritesDropdown = document.querySelector('.offcanvasFavouritesDropdown'),
  favouritesMenuDropdown = document.querySelector('.favouritesMenuDropdown');

// /////////////////////////////////////////////////////////////////////////////////////
// AFTER DOM IS LOADED FETCH DATA FROM JSON
document.addEventListener('DOMContentLoaded', () => {
  // console.log('PRODUCTS ARRAY EXIST ', productsArray.length);
  // if (productsArray.length == 0) {
  //   fectchDataJSON();
  // }
  fectchDataJSON();
});

// FETCH DATA FROM API/json
const fectchDataJSON = async () => {
  try {
    const res = await fetch('../assets/js/api.json');
    const dataJSON = await res.json();
    console.log('FETCH: ', { dataJSON });
    if (document.URL.includes('productos.html')) {
      renderProducts(dataJSON);
    }
    if (document.URL.includes('index.html' || 'contacto.html' || 'cotizate.html' || 'faq.html' || 'proyectos.html' || 'signup.html')) {
      //renderProducts(dataJSON);
    }
  } catch (error) {
    console.error(`Disculpas! algo salió mal. Por favor, intente de nuevo o contacte al admin.`);
    console.error(error);
  }
};

const precioArs = function (producto) {
  let precioToFormat = producto.precio;
  const options = {
    style: 'currency',
    currency: 'ARS',
    maximumSignificantDigits: 3,
  };
  const precioARS = new Intl.NumberFormat('es-AR', options).format(precioToFormat);
  //console.log(precioARS);
  return precioARS;
};

const renderProducts = (dataJSON) => {
  // IF USER IS IN PRODUCTOS.HTML
  if (document.URL.includes('productos.html')) {
    console.log("You're in productos.html");
    // console.log(dataJSON.length);

    // VARIABLES FROM PRODUCTOS.HTML
    const productList = document.getElementById('productList');

    productList.innerHTML = '';

    for (const producto of dataJSON) {
      const precio = precioArs(producto);
      // console.log(precio);
      const divHTML = `
        <div class="col">
          <div class="card border-0">
            <figure class="position-relative m-0">
              <img src="${producto.img500[0]}" class="card-img-top productoImg" alt="${producto.descripcion}" />
              <button type="button" class="btnFavourite bg-transparent border-0 position-absolute top-0 end-0 p-1 shadow-none fa-solid fa-heart btn-favourite" id="liveT${producto.id}">
                <span class=""></span>
              </button>
              <a id="${producto.id}" class="btnComprar btn ecd-btn-card position-absolute bottom-0 end-0 text-uppercase">VER MÁS</a>
            </figure>
            <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 11">
              <div id="liveToastSeven" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                  <div class="toast-body">
                    <p class=${producto.nombre}></p>
                    <a href="../pages/favoritos.html">tus favoritos</a>
                  </div>
                  <button type="button" class="btn-close me-2 m-auto shadow-none" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <h6 class="card-title fw-bold text-uppercase mb-0 mt-2">
              ${producto.nombre}
              </h6>
              <div class="clearfix">
                <ul id="swatch-list" class="d-flex p-0 pt-1 m-0 float-start">
                  <li class="cardSwatch p-1 ps-0"><img id="productoSwatch0" src="${producto.img40[0]}" width="28" alt="Muestra material Classic Ivory" /></li>
                  <li class="cardSwatch p-1"><img id="productoSwatch1" src="${producto.img40[1]}" width="28" alt="Muestra material lino blanco" /></li>
                  <li class="cardSwatch p-1"><img id="productoSwatch2" src="${producto.img40[2]}" width="28" alt="Muestra material lino marfil" /></li>
                  <li class="cardSwatch p-1"><img id="productoSwatch3" src="${producto.img40[3]}" width="28" alt="Muestra material lino marfil" /></li>
                </ul>
                <span class="productoStock badge p-1 m-1 bg-success rounded-pill text-dark float-end mt-1 me-1"></span>
              </div>
              <p class="m-0 productoMaterial">${producto.material}</p>
              <p class="productoMedidas m-0">Medidas: ${producto.medidas}</p>
              <p class="productoAncho m-0">${precio}</p>
            </div>
          </div>
        </div>
        `;

      productList.innerHTML += divHTML;
    }
    dataJSON.forEach((producto) => {
      document.getElementById(`liveT${producto.id}`).onclick = function () {
        addToFavourites(producto);
      };
      document.getElementById(`${producto.id}`).onclick = function () {
        selectProduct(producto);
      };
    });
  }
};

function addToFavourites(producto) {
  console.log({ favourites });
  console.log({ producto });
  // console.log(typeof favourites);
  console.log(producto.id);
  // console.log(favourites.includes(producto));
  // if (!favourites.includes(producto)) {
  let faveItem = favourites.find((prod) => Number(prod.id) == producto.id);
  // console.log(favouriteItem);
  if (faveItem == undefined) {
    favourites.push(producto);
    console.log(favourites);
    localStorage.setItem('favourites', JSON.stringify(producto));
    //console.log(favourites);

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
  } else {
    favourites.push(producto);
    Swal.fire({
      position: 'bottom-end',
      html: '<i class="fa-solid fa-heart"></i> ' + `<b>${producto.nombre}</b> ya está en tus favoritos! ` + '<a href="../pages/favoritos.html"><b>VER FAVORITOS</b></a> ' + '',
      showConfirmButton: false,
      iconColor: 'rgba(121, 85, 105, 1)',
      width: 500,
      padding: '2em',
      background: 'rgba(255, 255, 255, 0.9)',
      showCloseButton: true,
      timer: 4000,
    });
  }
}

// EVENT TO CAPTURE CLICK ON ADD TO FAVOURITES BTN
const selectFavourite = function (e) {
  e.target.className.includes('btnFavourite') ? setFavourites(e.target.parentElement.parentElement) : '';
  e.target.stopPropagation;
};

const setFavourites = (e) => {
  const productoFavourite = {
    id: e.querySelector('.btnFavourite').dataset.id,
  };

  let favouriteSelected = Number(productoFavourite.id);

  for (const favourite of dataJSON) {
    if (favourites.find((favourite) => (favourite.id = favouriteSelected))) {
    } else {
      favourites.push(favourite);
      localStorage.setItem('favourites', JSON.stringify(favourites));
      console.log(favourites);
    }
  }
  localStorage.setItem('itemFavourite', JSON.stringify(productoFavourite));
  addToFavourites(productoFavourite);
};

// RENDER OFFCANVAS CART && MENU DROPDOWN CART
const renderOffcanvasCart = (dataJSON) => {
  // console.log(offcanvasCartDropdown);
  // console.log(navbarCartDropdown);

  offcanvasCartUl.innerHTML = '';
  navbarCartDropdown.innerHTML = '';
  cartItemsPill.innerHTML = ''; //cart.length

  if (!cart.length == 0) {
    for (let i = 0; i < cart.length; i++) {
      for (const producto of dataJSON) {
        if (producto.id == cart[i].id) {
          //console.log(producto.id == cart[i].id);
          // const precioArs = function (precio) {
          //   let precioToFormat = producto.precio;
          //   const options = {
          //     style: 'currency',
          //     currency: 'ARS',
          //   };
          //   const precioARS = new Intl.NumberFormat('es-AR', options).format(precioToFormat);
          //   console.log(precioARS);
          //   return precioARS;
          // };
          let divHTLM = `
            <li class="list-group-item d-flex justify-content-between align-items-center position-relative">
              <figure class="p-0 m-0 align-self-center">
                <img class="ps-1" src="${producto.img100[0]}" width="100" height="90" alt="${producto.descripcion}" />
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

          console.log(divHTLM);

          //RENDER PRODUCTS IN MOBILE OFFCANVAS NAVBAR'S CART ICON
          offcanvasCartUl.innerHTML += divHTLM;
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
    offcanvasCartUl.innerHTML = divHTML;
    //RENDER PRODUCTS IN NAVBAR'S CART DROPDOWN
    navbarCartDropdown.innerHTML = divHTML;
  }

  cartItemsPill.innerHTML = cart.length; //cart.length
  console.log('CART ITEM PILLS', cartItemsPill.innerHTML);
};

const renderOffcanvasFavourites = (dataJSON) => {
  // FAVOURITES NAVBAR DROPDOWN
  // const btnFavourite = document.querySelector('.btnFavourite');
  const favouriteItemsPill = document.getElementById('favouriteItemsPill');
  const offcanvasFavouritesDropdown = document.querySelector('.offcanvasFavouritesDropdown');
  const favouritesMenuDropdown = document.querySelector('.favouritesMenuDropdown');

  offcanvasFavouritesDropdown.innerHTML = '';
  favouritesMenuDropdown.innerHTML = '';
  favouriteItemsPill.innerHTML = ''; //cart.length

  if (!favourites.length == 0) {
    for (let i = 0; i < favourites.length; i++) {
      for (const producto of dataJSON) {
        if (producto.id == favourites[i].id) {
          //console.log(producto.id == favourites[i].id);
          const precioArs = function (precio) {
            let precioToFormat = producto.precio;
            const options = {
              style: 'currency',
              currency: 'ARS',
            };
            const precioARS = new Intl.NumberFormat('es-AR', options).format(precioToFormat);
            console.log(precioARS);
            return precioARS;
          };
          let divHTLM = `
            <li class="list-group-item d-flex justify-content-between align-items-center position-relative ecd-border-bt">
              <figure class="p-0 m-0 align-self-center">
                <img class="ps-1" src="${producto.img100[0]}" width="100" height="90" alt="${producto.descripcion}" />
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
          offcanvasFavouritesDropdown.innerHTML += divHTLM;
          //RENDER PRODUCTS IN NAVBAR'S CART DROPDOWN
          favouritesMenuDropdown.innerHTML += divHTLM;
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
    offcanvasFavouritesDropdown.innerHTML = divHTML;
    //RENDER PRODUCTS IN NAVBAR'S CART DROPDOWN
    favouritesMenuDropdown.innerHTML = divHTML;
  }

  favouriteItemsPill.innerHTML = favourites.length; //favourites.length
  console.log('FAVOURITE ITEM PILLS', favouriteItemsPill.innerHTML);
};

// if (!dataJSON.length == 0) {
//   // products gallery
//   renderProducts(dataJSON);
//   // cart
//   renderOffcanvasCart(dataJSON);
//   // favourites
//   renderOffcanvasFavourites(dataJSON);
// }
// };

// IF USER IS IN INDEX.HTML
if (document.URL.includes('index.html')) {
  console.log("You're in index.html");
}

// IF USER IS IN PRODUCTO.HTML
if (document.URL.includes('producto.html')) {
  if (productoStored == '') {
  }

  console.log("You're in producto.html");
  // product
  // renderProduct(dataJSON);
  // cart
  renderOffcanvasCart(dataJSON);
  // favourites
  renderOffcanvasFavourites(dataJSON);
  // renderMenuFavourites(dataJSON);
}

// IF USER IS IN CARRITO.HTML
if (document.URL.includes('carrito.html')) {
  console.log("You're in carrito.html");
  // cart
  renderCart(dataJSON);
  renderOffcanvasCart(dataJSON);
  // favourites
  renderOffcanvasFavourites(dataJSON);
  // renderMenuFavourites(dataJSON);
}

if (document.URL.includes('favoritos.html')) {
  console.log("You're in favoritos.html");
  // cart
  renderOffcanvasCart(dataJSON);
  // favourites
  renderFavourites(dataJSON);
  renderOffcanvasFavourites(dataJSON);
  renderMenuFavourites(dataJSON);
}

const renderFavourites = (dataJSON) => {
  offcanvasFavouritesDropdown.innerHTML = '';
  favouritesMenuDropdown.innerHTML = '';
  console.log('FAVOURITE ITEM PILLS', favouriteItemsPill.innerHTML);
  favouriteItemsPill.innerHTML = favourites.length; //cart.length

  // console.log(favouriteSelected);

  for (const favourite of dataJSON) {
    if (favourite.id == favouriteSelected) {
      // FINISHING MAGIC HAPPENS HERE
      console.log('FINISHING MAGIC HAPPENS HERE');
    }
  }
};

// console.log('APP DATAJSON', dataJSON); // UNDEFINED

// const addToFavourites = (dataJSON) => {
//   console.log(favouriteSelected);
//   console.log(dataJSON);

//   for (const favourite of dataJSON) {
//     if (favourites.find((favourite) => (favourite.id = favouriteSelected))) {
//     } else {
//       favourites.push(favourite);
//       localStorage.setItem('favourites', JSON.stringify(favourites));
//       console.log(favourites);
//     }
//   }
// };

const callFavourite = (dataJSON) => {
  for (const producto of dataJSON) {
    if (producto.id == favouriteSelected) {
      console.log(dataJSON);
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
