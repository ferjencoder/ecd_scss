'use strict';

// CHECK CART
let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);

// FETCH SELECTED PRODUCT FROM LOCAL STORAGE
let productoStored = JSON.parse(localStorage.getItem('item'));
let productoSelected = Number(productoStored.id);

// WAIT FOR DOCUMENT TO LOAD TO CALL FETCH
document.addEventListener('DOMContentLoaded', () => {
  fectchData();
});

// FETCH / GET DATA FROM JSON FILE (LATER ON API) AND CALL RENDER PRODUCTS AND SWIPER
//info get favourites to work
const fectchData = async () => {
  try {
    const res = await fetch(`../assets/js/api.json`);
    const data = await res.json();
    renderProducts(data);
    renderOffcanvasCart(cart);
    callSwiper();
  } catch (error) {
    console.error('Disculpas! algo salió mal. Por favor, intente de nuevo o contacte al admin.');
    console.error(error);
  } finally {
  }
};

// SWIPER CALL
const callSwiper = () => {
  let galleryThumbs = new Swiper('.gallery-thumbs', {
    direction: 'vertical',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
  let galleryTop = new Swiper('.gallery-top', {
    direction: 'vertical',
    thumbs: {
      swiper: galleryThumbs,
    },
  });
  //  console.log("DONE SWIPIN'");
};

//! CALL LIVE TOASTS
// const callSwiper = () => {
//   let galleryThumbs = new Swiper('.gallery-thumbs', {
//     direction: 'vertical',
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 7,
//     freeMode: true,
//     watchSlidesProgress: true,
//   });
//   let galleryTop = new Swiper('.gallery-top', {
//     direction: 'vertical',
//     thumbs: {
//       swiper: galleryThumbs,
//     },
//   });
//   //  console.log("DONE SWIPIN'");
// };

// RENDER PRODUCTS

// RENDER PRODUCT
const almohadonesDiv = document.getElementById('productList');
const almohadonesTable = document.getElementById('productTable');
const offcanvasCartDropdown = document.getElementById('offcanvasCartDropdown');
const navbarCartDropdown = document.getElementById('navbarCartDropdown');

const renderProducts = (data) => {
  almohadonesDiv.innerHTML = '';
  almohadonesTable.innerHTML = '';

  for (const producto of data) {
    if (producto.id === productoSelected) {
      //RENDER PRODUCT GALLERY - SWIPER
      almohadonesDiv.innerHTML += `
        <div class="col-2 m-0 p-0">
          <div class="swiper gallery-thumbs">
            <div class="swiper-wrapper">
              <div class="swiper-slide" style="background-image: url(${producto.img100[0]})"></div>
              <div class="swiper-slide" style="background-image: url(${producto.img100[1]})"></div>
              <div class="swiper-slide" style="background-image: url(${producto.img100[2]})"></div>
              <div class="swiper-slide" style="background-image: url(${producto.img100[3]})"></div>
              <div class="swiper-slide" style="background-image: url(${producto.img100[4]})"></div>
              <div class="swiper-slide" style="background-image: url(${producto.img100[5]})"></div>
              <div class="swiper-slide" style="background-image: url(${producto.img100[6]})"></div>
              <div class="swiper-slide" style="background-image: url(${producto.img100[7]})"></div>
              <div class="swiper-slide" style="background-image: url(${producto.img100[8]})"></div>
              <div class="swiper-slide" style="background-image: url(${producto.img100[9]})"></div>
            </div>
          </div>
        </div>
        <div class="col-10 m-0 p-0">
          <div class="swiper gallery-top m-0 p-0">
            <div class="swiper-wrapper">
              <div id="slide-0" class="swiper-slide"><img src="${producto.img1000[0]}" alt="${producto.descripcion}" /></div>
              <div id="slide-1" class="swiper-slide"><img src="${producto.img1000[1]}" alt="${producto.descripcion}" /></div>
              <div id="slide-2" class="swiper-slide"><img src="${producto.img1000[2]}" alt="${producto.descripcion}" /></div>
              <div id="slide-3" class="swiper-slide"><img src="${producto.img1000[3]}" alt="${producto.descripcion}" /></div>
              <div id="slide-4" class="swiper-slide"><img src="${producto.img1000[4]}" alt="${producto.descripcion}" /></div>
              <div id="slide-5" class="swiper-slide"><img src="${producto.img1000[5]}" alt="${producto.descripcion}" /></div>
              <div id="slide-6" class="swiper-slide"><img src="${producto.img1000[6]}" alt="${producto.descripcion}" /></div>
              <div id="slide-7" class="swiper-slide"><img src="${producto.img1000[7]}" alt="${producto.descripcion}" /></div>
              <div id="slide-8" class="swiper-slide"><img src="${producto.img1000[8]}" alt="${producto.descripcion}" /></div>
              <div id="slide-9" class="swiper-slide"><img src="${producto.img1000[9]}" alt="${producto.descripcion}" /></div>
            </div>
          </div>
        </div>
        </div>
      </div>
      `;

      // RENDER PRODUCT DETAILS TABLE
      almohadonesTable.innerHTML += `
        <aside class="py-5 p-sm-5 pt-xl-5 px-xl-0 bg-white ecd-border-light">
          <div class="container-sm px-5 px-xl-4">
            <div class="col-12 m-0 px-4 mt-4">
              <ul class="small-photos p-0 list-group-flush">
                <li class="ecd-border-bt mb-3"><h2 class="text-uppercase text-serif h4">${producto.nombre}</h2></li>
                <li class="ecd-border-bt mb-3"><p>${producto.descripcion}</p></li>
                <li class="mt-4 p-0"><p class="m-0 p-0">MATERIAL: ${producto.material}.</p></li>
                <li class="m-0 p-0 mb-3"><p class="m-0 p-0">MEDIDAS: ${producto.alto}cm x ${producto.ancho}cm, con relleno.</p></li>
                <li class="mb-3 p-0"><p class="m-0 p-0">PRECIO: ${producto.precio}</p></li>
                <li class="mb-2">
                  <h6 class="text-uppercase text-primary">
                    <strong>Selecciona el color: <span></span></strong>
                  </h6>
                </li>
                <li>
                  <div class="list-group list-group-flush list-group-horizontal overflow-hidden m-0 p-0 border-0 d-inline-flex" id="list-tab" role="tablist">
                    <div class="list-group-item btn-swatch sw1 m-0 p-1 text-center list-group-item-action border-0" id="slide-0" data-bs-toggle="list" href="#list-one" role="tab" aria-controls="list-one">
                      <img class="img-thumbnail ecd-shadow m-0 p-0" src="${producto.img40[0]}" width="35" height="30" alt="${producto.colors[0]}" data-bs-toggle="tooltip" data-bs-placement="bottom" title="${producto.colors[0]}" data-bs-custom-class="ecd-tooltip" />
                    </div>
                    <div class="list-group-item btn-swatch sw2 m-0 p-1 border-0 text-center list-group-item-action" id="slide-1" data-bs-toggle="list" href="#list-five" role="tab" aria-controls="list-five">
                      <img class="img-thumbnail ecd-shadow m-0 p-0" src="${producto.img40[1]}" width="35" height="30" alt="${producto.colors[1]}" data-bs-toggle="tooltip" data-bs-placement="bottom" title="${producto.colors[1]}" data-bs-custom-class="ecd-tooltip" />
                    </div>
                    <div class="list-group-item btn-swatch sw3 m-0 p-1 border-0 text-center list-group-item-action" id="slide-2" data-bs-toggle="list" href="#list-nine" role="tab" aria-controls="list-nine">
                      <img class="img-thumbnail ecd-shadow m-0 p-0" src="${producto.img40[2]}" width="35" height="30" alt="${producto.colors[2]}" data-bs-toggle="tooltip" data-bs-placement="bottom" title="${producto.colors[2]}" data-bs-custom-class="ecd-tooltip" />
                    </div>
                    <div class="list-group-item btn-swatch sw4 m-0 p-1 border-0 text-center list-group-item-action" id="slide-3" data-bs-toggle="list" href="#list-thirteen" role="tab" aria-controls="list-thirteen">
                      <img class="img-thumbnail ecd-shadow m-0 p-0" src="${producto.img40[3]}" width="35" height="30" alt="${producto.colors[3]}" data-bs-toggle="tooltip" data-bs-placement="bottom" title="${producto.colors[3]}" data-bs-custom-class="ecd-tooltip" />
                    </div>
                  </div>
                </li>
                <li class="list-group-item text-center ecd-border-bt mt-5 pb-3">
                  <button id="" class="agregarAlCarrito btn ecd-btn-outlined w-100 shadow-none" type="button">AGREGAR AL CARRITO</button>
                </li>
                <li class="list-group-item text-center ecd-border-bt">CONOCÉ LAS CUOTAS CON TU TARJETA</li>
                <li class="list-group-item text-center border-0 mt-2">
                  <a class="btn ecd-btn-outlined-muted w-100 shadow-none" href="../pages/productos.html">CONTINUAR COMPRANDO</a>
                  </li>
              </ul>
            </div>
          </div>
        </aside>
      `;

      //   CONTINUAR COMPRANDO
      // <button class="btn ecd-btn-outlined-muted w-100 shadow-none" type="submit" aria-label="Continuar comprando">
      // </button>;

      document.querySelector('.agregarAlCarrito').onclick = function () {
        // if ($('.dropdown').find('.dropdown-menu').is(":hidden")){
        //   $('.dropdown-toggle').dropdown('toggle');
        addToCart(producto);
      };
    }
  }
};

// RENDER OFFCANVAS CART && MENUE DROPDOWN CART
const renderOffcanvasCart = (cart) => {
  console.log(cart);
  offcanvasCartDropdown.innerHTML = '';

  for (const itemInCart of cart) {
    let precio = itemInCart.precio;

    const options = {
      style: 'currency',
      currency: 'ARS',
    };
    const precioARS = new Intl.NumberFormat('es-AR', options).format(precio);
    console.log(precioARS);

    offcanvasCartDropdown.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center position-relative">
        <figure class="p-0 m-0 align-self-center">
          <img class="ps-1" src="${itemInCart.img100[0]}" width="100" height="100" alt="${itemInCart.descripcion}" />
        </figure>
        <div class="container d-flex flex-column align-items-start ps-2">
          <h6 class="text-uppercase pt-1 text-primary m-0">${itemInCart.nombre}</h6>
          <p class="m-0 p-0"><small>Color: ${itemInCart.colors[0]}</small></p>
          <p class="m-0 p-0"><small>Material: ${itemInCart.material}</small></p>
          <p class="m-0 p-0">Precio: ${itemInCart.precio}</p>
        </div>
        <span class="badge bg-success rounded-pill text-dark position-absolute top-0 end-0 m-2">${itemInCart.stock[0]}</span>
      </li>
    `;
    navbarCartDropdown.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center position-relative">
        <figure class="p-0 m-0 align-self-center">
          <img class="ps-1" src="${itemInCart.img100[0]}" width="100" height="100" alt="${itemInCart.descripcion}" />
        </figure>
        <div class="container d-flex flex-column align-items-start ps-2">
          <h6 class="text-uppercase pt-1 text-primary m-0">${itemInCart.nombre}</h6>
          <p class="m-0 p-0"><small>Color: ${itemInCart.colors[0]}</small></p>
          <p class="m-0 p-0"><small>Material: ${itemInCart.material}</small></p>
          <p class="m-0 p-0">Precio: ${itemInCart.precio}</p>
        </div>
        <span class="badge bg-success rounded-pill text-dark position-absolute top-0 end-0 m-2">${itemInCart.stock[0]}</span>
      </li>
    `;
  }
};

const cartDropdown = document.querySelector('#cartDropdown');

console.log(cartDropdown);

const openCartDropdown = () => {
  cartDropdown.dropdown('show');
  console.log(cartDropdown);
};

const myModal = document.getElementById('myModal');

myModal.addEventListener('show.bs.modal', (event) => {
  if (!data) {
    return event.preventDefault(); // stops modal from being shown
  }
});

// ADD TO CART
const addToCart = (producto) => {
  // CHECK IF productoSelected EXISTS IN CART
  if (cart.find((p) => p.id == productoSelected)) {
  } else {
    cart.push(producto);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('ADDING TO CART WORKED');
    renderOffcanvasCart(cart);
    openCartDropdown();
  }

  // document.querySelector('#cartDropdown').className = 'btn dropdown-toggle shadow-none show';

  const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
  const dropdownList = [...dropdownElementList].map((dropdownToggleEl) => new bootstrap.Dropdown(dropdownToggleEl));
  // const cartDropdown = document.querySelector('#cartDropdown');

  console.log(cart);
};
