// CART
let cart = JSON.parse(localStorage.getItem('cart')) || [],
  productoStored = JSON.parse(localStorage.getItem('itemCart')) || '',
  productoSelected = Number(productoStored.id),
  // FAVOURITE
  favourites = JSON.parse(localStorage.getItem('favourites')) || [],
  favouriteStored = JSON.parse(localStorage.getItem('itemFavourite')) || '',
  favouriteSelected = Number(favouriteStored.id);

// GLOBAL SCOPE VARRIABLES
const alertToastDiv = document.getElementById('ecdToast');

// CART VARIABLES
const cartItemsPill = document.getElementById('cartItemsPill'),
  offcanvasCartUl = document.getElementById('offcanvasCartUl'), // MAGIC HAPPENS HERE
  navbarCartUl = document.getElementById('navbarCartUl'), // MAGIC HAPPENS HERE
  cartMenuDropdown = document.getElementById('cartMenuDropdown'); // TOGGLE

// FAVOURITES NAVBAR DROPDOWN
const btnFavourite = document.querySelector('.btnFavourite'),
  favouriteItemsPill = document.getElementById('favouriteItemsPill'),
  offcanvasFavouritesUl = document.getElementById('offcanvasFavouritesUl'),
  favouritesMenuUl = document.getElementById('favouritesMenuUl');

// AFTER DOM IS LOADED FETCH DATA FROM JSON
document.addEventListener('DOMContentLoaded', () => {
  fectchDataJSON();
  //renderNavbars(cart);
});

// FETCH DATA FROM API/json
const fectchDataJSON = async () => {
  try {
    const res = await fetch('../assets/js/api.json');
    const dataJSON = await res.json();
    //console.log('FETCH: ', { dataJSON });
    if (document.URL.includes('productos.html')) {
      renderProducts(dataJSON);
      renderNavbars(cart);
    }
    if (document.URL.includes('producto.html')) {
      console.log("YOU'RE IN PRODUCTO.HTML GALLERY");
      console.log(productoSelected);
      // renderNavbars();
      renderProductGallery(dataJSON, productoSelected);
      callSwiper();
    }
    if (document.URL.includes('carrito.html')) {
      console.log("YOU'RE IN CARRITO.HTML");
      renderNavbars(cart);
      renderCart(cart);
      renderCartSummary(cart);
    }
    if (document.URL.includes('contacto.html')) {
      renderNavbars(cart);
    }
    if (document.URL.includes('index.html' || 'contacto.html')) {
      renderNavbars(cart);
    }
    //return createProductsArray(dataJSON);
  } catch (error) {
    console.error(`Disculpas! algo salió mal. Por favor, intente de nuevo o contacte al admin.`);
    console.error(error);
  }
};

// FORMAT PRECIO
const precioArs = function (producto) {
  let precioToFormat = producto.precio;
  console.log('PRECIOFORMAR', precioToFormat);
  const options = {
    style: 'currency',
    currency: 'ARS',
    maximumSignificantDigits: 3,
  };
  const precioARS = new Intl.NumberFormat('es-AR', options).format(precioToFormat);
  //console.log(precioARS);
  return precioARS;
};

// SPRECIFIC TO PRODUCTOS.HTML
const renderProducts = (dataJSON) => {
  // console.log(dataJSON);
  // IF USER IS IN PRODUCTOS.HTML
  if (document.URL.includes('productos.html')) {
    console.log("YOU'RE IN PRODUCTOS.HTML");

    // VARIABLES FROM PRODUCTOS.HTML
    const productList = document.getElementById('productList');

    productList.innerHTML = '';

    for (const producto of dataJSON) {
      const precio = precioArs(producto);

      const divHTML = `
        <div class="col">
          <div class="card border-0">
            <figure class="position-relative m-0">
              <img src="${producto.img500[0]}" class="card-img-top productoImg" alt="${producto.descripcion}" />
              <button type="button" class="btnFavourite bg-transparent border-0 position-absolute top-0 end-0 p-1 shadow-none fa-solid fa-heart btn-favourite" id="toast${producto.id}">
              </button>
              <a id="btn${producto.id}" class="btnComprar btn ecd-btn-card position-absolute bottom-0 end-0 text-uppercase" href="../pages/producto.html">VER MÁS</a>
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
              <p class="m-0 productoMaterial">Material: ${producto.material}</p>
              <p class="productoMedidas m-0">Medidas: ${producto.medidas}</p>
              <p class="productoAncho m-0">${precio}</p>
            </div>
          </div>
        </div>
        `;

      productList.innerHTML += divHTML;
    }
    dataJSON.forEach((producto) => {
      document.getElementById(`toast${producto.id}`).onclick = function () {
        addToFavourites(producto);
      };
      document.getElementById(`btn${producto.id}`).onclick = function () {
        selectProduct(producto);
      };
    });
  }
};

function addToFavourites(producto) {
  let encontrado = favourites.find((p) => p.id == producto.id);
  // console.log(encontrado);
  if (encontrado == undefined) {
    favourites.push(producto);
    localStorage.setItem('favourites', JSON.stringify(favourites));
    // console.log('ADDED: ', favourites);
    renderNavbars(producto);

    // alertToast(producto);

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

function selectProduct(producto) {
  // console.log('SELECTED ITEM FOR CART: ', producto);
  // console.log(productoSelected);
  // console.log('--------------------------');

  if (productoSelected == producto.id) {
    // console.log('EL PRODUCTO ESTABA GUARDADO');
  } else {
    localStorage.setItem('itemCart', JSON.stringify(producto));
  }
}

function renderNavbars(producto) {
  // console.log('--------------------------');
  // console.log('RENDERED FAVOURITES MENU: ', favourites);
  // console.log('RENDERED CART MENU: ', cart);

  // FAVOURITES
  let favouritePill = favourites.length;
  favouriteItemsPill.innerHTML = '';
  offcanvasFavouritesUl.innerHTML = '';
  favouritesMenuUl.innerHTML = '';

  favourites.forEach((producto) => {
    const precio = precioArs(producto);
    let divHTML = `
    <li class="list-group-item d-flex justify-content-between align-items-center position-relative">
    <figure class="p-0 m-0 align-self-center">
    <img class="ps-1" src="${producto.img100[0]}" width="100" height="90" alt="${producto.descripcion}" />
    </figure>
    <div class="container d-flex flex-column align-items-start ps-2">
          <h6 class="text-uppercase pt-1 text-primary m-0">${producto.nombre}</h6>
          <p class="m-0 p-0"><small>Color: ${producto.colors[0]}</small></p>
          <p class="m-0 p-0"><small>Material: ${producto.material}</small></p>
          <p class="m-0 p-0">Precio: ${precio}</p>
          </div>
          <span class="badge bg-success rounded-pill text-dark position-absolute top-0 end-0 m-2">${producto.stock[0]}</span>
          </li>
      `;

    offcanvasFavouritesUl.innerHTML += divHTML;
    favouritesMenuUl.innerHTML += divHTML;
  });

  favouriteItemsPill.innerHTML = favouritePill;

  // CART
  let cartItemPill = cart.length;
  cartItemsPill.innerHTML = '';
  offcanvasCartUl.innerHTML = '';
  navbarCartUl.innerHTML = '';

  cart.forEach((producto) => {
    const precio = precioArs(producto);
    let divHTML = `
      <li class="list-group-item d-flex justify-content-between align-items-center position-relative">
        <figure class="p-0 m-0 align-self-center">
          <img class="ps-1" src="${producto.img100[0]}" width="100" height="90" alt="${producto.descripcion}" />
        </figure>
        <div class="container d-flex flex-column align-items-start ps-2">
          <h6 class="text-uppercase pt-1 text-primary m-0">${producto.nombre}</h6>
          <p class="m-0 p-0"><small>Color: ${producto.colors[0]}</small></p>
          <p class="m-0 p-0"><small>Material: ${producto.material}</small></p>
          <p class="m-0 p-0">Precio: ${precio}</p>
        </div>
        <span class="badge bg-success rounded-pill text-dark position-absolute top-0 end-0 m-2">${producto.stock[0]}</span>
      </li>
    `;
    offcanvasCartUl.innerHTML += divHTML;
    navbarCartUl.innerHTML += divHTML;
  });

  cartItemsPill.innerHTML = cartItemPill;
  // console.log('RENDERED FAVOURITES END');
  // console.log('--------------------------');
}

// SPRECIFIC TO PRODUCTO.HTML GALLERY
const callSwiper = () => {
  // console.log('SWIPER CALL');
  let galleryThumbs = new Swiper('.gallery-thumbs', {
    direction: 'vertical',
    loop: true,
    spaceBetween: 10,
    //slidesPerView: 5,
    freeMode: true,
    grabCursor: true,
    // watchSlidesProgress: true,
    breakpoints: {
      '@0.00': {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      '@1.00': {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      // '@1.50': {
      //   slidesPerView: 4,
      //   spaceBetween: 50,
      // },
    },
  });
  let galleryTop = new Swiper('.gallery-top', {
    direction: 'vertical',
    loop: true,
    // spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs,
    },
  });
  //  console.log("DONE SWIPIN'");
};

const renderProductGallery = (dataJSON, productoSelected) => {
  const almohadonesDiv = document.getElementById('productList'),
    almohadonesTable = document.getElementById('productTable');

  // console.log(productoSelected);
  almohadonesDiv.innerHTML = '';
  almohadonesTable.innerHTML = '';

  dataJSON.forEach((producto) => {
    if (producto.id == productoSelected) {
      //RENDER PRODUCT GALLERY - SWIPER
      almohadonesDiv.innerHTML += `
        <div class="col-2 m-0 me-1 p-0">
          <div class="swiper gallery-thumbs">
            <div class="swiper-wrapper">
              <div class="swiper-slide img-fluid" style="background-image: url(${producto.img100[0]})"></div>
              <div class="swiper-slide img-fluid" style="background-image: url(${producto.img100[1]})"></div>
              <div class="swiper-slide img-fluid" style="background-image: url(${producto.img100[2]})"></div>
              <div class="swiper-slide img-fluid" style="background-image: url(${producto.img100[3]})"></div>
              <div class="swiper-slide img-fluid" style="background-image: url(${producto.img100[4]})"></div>
              <div class="swiper-slide img-fluid" style="background-image: url(${producto.img100[5]})"></div>
              <div class="swiper-slide img-fluid" style="background-image: url(${producto.img100[6]})"></div>
              <div class="swiper-slide img-fluid" style="background-image: url(${producto.img100[7]})"></div>
              <div class="swiper-slide img-fluid" style="background-image: url(${producto.img100[8]})"></div>
              <div class="swiper-slide img-fluid" style="background-image: url(${producto.img100[9]})"></div>
            </div>
          </div>
        </div>
        <div class="col-10 m-0 ms-1 p-0">
          <div class="swiper gallery-top m-0 p-0">
            <div class="swiper-wrapper">
              <div id="slide-0" class="swiper-slide card card-img-top m-0 p-0 border-0 img-fluid"><img src="${producto.img1000[0]}" alt="${producto.descripcion}" /></div>
              <div id="slide-1" class="swiper-slide card card-img-top m-0 p-0 border-0 img-fluid"><img src="${producto.img1000[1]}" alt="${producto.descripcion}" /></div>
              <div id="slide-2" class="swiper-slide card card-img-top m-0 p-0 border-0 img-fluid"><img src="${producto.img1000[2]}" alt="${producto.descripcion}" /></div>
              <div id="slide-3" class="swiper-slide card card-img-top m-0 p-0 border-0 img-fluid"><img src="${producto.img1000[3]}" alt="${producto.descripcion}" /></div>
              <div id="slide-4" class="swiper-slide card card-img-top m-0 p-0 border-0 img-fluid"><img src="${producto.img1000[4]}" alt="${producto.descripcion}" /></div>
              <div id="slide-5" class="swiper-slide card card-img-top m-0 p-0 border-0 img-fluid"><img src="${producto.img1000[5]}" alt="${producto.descripcion}" /></div>
              <div id="slide-6" class="swiper-slide card card-img-top m-0 p-0 border-0 img-fluid"><img src="${producto.img1000[6]}" alt="${producto.descripcion}" /></div>
              <div id="slide-7" class="swiper-slide card card-img-top m-0 p-0 border-0 img-fluid"><img src="${producto.img1000[7]}" alt="${producto.descripcion}" /></div>
              <div id="slide-8" class="swiper-slide card card-img-top m-0 p-0 border-0 img-fluid"><img src="${producto.img1000[8]}" alt="${producto.descripcion}" /></div>
              <div id="slide-9" class="swiper-slide card card-img-top m-0 p-0 border-0 img-fluid"><img src="${producto.img1000[9]}" alt="${producto.descripcion}" /></div>
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
                <li class="list-group-item text-center border-0 mt-5 pb-0">
                  <button id="" class="agregarAlCarrito btn ecd-btn-outlined w-100 shadow-none" type="button">AGREGAR AL CARRITO</button>
                </li>
                <li class="list-group-item text-center ecd-border-bt pb-3">
                  <a class="btn ecd-btn-outlined-muted w-100 shadow-none" href="../pages/carrito.html">VER CARRITO</a>
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

      document.querySelector('.agregarAlCarrito').onclick = function () {
        addToCart(producto);
      };
    }
  });
};

const addToCart = (producto) => {
  // CHECK IF productoSelected EXISTS IN CART
  // console.log(producto);
  if (cart.find((producto) => producto.id == productoSelected)) {
  } else {
    cart.push(producto);
    localStorage.setItem('cart', JSON.stringify(cart));
    cartItemsPill.innerHTML = cart.length;
    renderNavbars();
    // openCartDropdown();
    Swal.fire({
      position: 'bottom-end',
      html: '<i class="fa-solid fa-heart"></i> ' + `Agregaste: <b>${producto.nombre}</b> a tu carrito! ` + '<a href="../pages/carrito.html"><b>VER CARRITO</b></a> ' + '',
      showConfirmButton: false,
      iconColor: 'rgba(121, 85, 105, 1)',
      width: 500,
      padding: '2em',
      background: 'rgba(255, 255, 255, 0.9)',
      showCloseButton: true,
      timer: 4000,
    });
  }
};

const alertToast = function (producto) {
  const ecdToastLink = document.getElementById('ecdToastLink');
  const classes = ecdToastLink.classList;

  const result = classes.toggle('hiddenToast');

  if (result) {
    setTimeout(() => {
      // ecdToast.style.display = 'none';
      ecdToastLink.textContent = `Agregaste ${producto.nombre} a tu carrito`;
    }, '3000');
  }
  // setTimeout(() => {
  //   ecdToast.style.display = 'none';
  // }, '3000');
};

// SPRECIFIC TO CARRITO.HTML GALLERY

function renderCart(cart) {
  const cartTable = document.querySelector('#cartTable');
  const cartSummary = document.querySelector('#cartSummary');

  cartTable.innerHTML = '';

  for (const cartItem of cart) {
    const precio = precioArs(cartItem);

    let divHTML = `
      <tr>
        <th scope="row">
          <img class="cartItemThumbnail me-2 my-2" src="${cartItem.img100[0]}" alt="${cartItem.descripcion}" />
        </th>
        <td class="text-start detalles">
          <strong class="product-item-name">
            <a href="#" class="text-decoration-none text-start">${cartItem.nombre}</a>
          </strong>
          <dl class="item-options d-flex flex-column m-0">
            <dd class="text-muted text-start my-1">COLOR: ${cartItem.colors[0]}</dd>
            <dd class="text-muted text-start my-1">TAMAÑO: ${cartItem.alto}cm x ${cartItem.ancho}cm</dd>
          </dl>
        </td>
        <td class="text-center numeroFormat" id="precio">${precio}</td>
        <td class="text-center">
          <div class="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group" role="group" aria-label="First group">
              <button id="minusQ${cartItem.id}" class="btn ecd-btn-counter-hover minusQ" type="button">-</button>
              <button id="numQ${cartItem.id}" class="d-block btn num ecd-btn-counter numQ">${cartItem.cantidad}</button>
              <button id="plusQ${cartItem.id}" class="btn ecd-btn-counter-hover plusQ" type="button">+</button>
            </div>
          </div>
        </td>
        <td class="text-center numeroFormat" id="subtotal">${precio}</td>
        <td>
          <button id="del${cartItem.id}" class="btn shadow-none" aria-label="Close" type="button">
          <i class="fa-solid fa-xmark"></i>
          </button>
        </td>
      </tr>
`;
    cartTable.innerHTML += divHTML;
  }

  for (const cartItem of cart) {
    document.getElementById(`del${cartItem.id}`).onclick = function () {
      deleteFromCart(cartItem);
    };
    document.getElementById(`minusQ${cartItem.id}`).onclick = function () {
      minusQty(cartItem);
    };
    document.getElementById(`numQ${cartItem.id}`).onclick = function () {
      numQty(cartItem);
    };
    document.getElementById(`plusQ${cartItem.id}`).onclick = function () {
      plusQty(cartItem);
    };
    document.getElementById(`minusQ${cartItem.id}`).onclick = function () {
      plusQ(cartItem);
    };
  }
}

const renderCartSummary = (cart) => {
  let subtotal1 = 0;
  console.log(cart);
  cart.forEach((cartItem) => {
    console.log(cartItem.precio);
    subtotal1 += Number(cartItem.precio);
    console.log('SUBTOTAL 1', subtotal1);

    const subtotal = precioArs(subtotal1);

    console.log(subtotal);
  });

  cartSummary.innerHTML = '';

  cartSummary.innerHTML = `
  <tr>
    <td>SUBTOTAL</td>
    <td class="text-end subtotalCheckOut numeroFormat">${subtotal}</td>
  </tr>
  <tr>
    <td>CUPON</td>
    <td class="text-end cuponCheckOut numeroFormat">0</td>
  </tr>
  <tr>
    <td>COSTO DE ENVÍO</td>
    <td class="text-end envioCheckOut numeroFormat">0</td>
  </tr>
  <tr>
    <td class="fw-bold">TOTAL</td>
    <td class="text-end fw-bold totalCheckOut numeroFormat">${subtotal}</td>
  </tr>
  `;
};

function deleteFromCart(cartItem) {
  let itemSelected = cart.findIndex((prod) => prod.id == cartItem.id);
  cart.splice(itemSelected, 1);

  localStorage.setItem('cart', JSON.stringify(cart));
  fectchDataJSON();
}

//todo 1. REMEMBER TO ADD SWIPER IN PRODUCTO.HTML
//todo 2. CREATE OWN SWEET ALERT
//todo 3. THINK OF AN ARRAY TO CAPTURE 4 LAST SEEN ITEMS
//todo 4. ADD PILL WITH ITEMS IN FAVOURITES AND CART IN OFFCANVAS NAVBAR
//todo 5. FIX BTN IN FAVOURITES AND CAR OFFCANVAS AND NAVBAR (ADD LAST SEEN ITEMS TO FAVOURITES) (REF 4.)

//info REAL TO FIX
//info 1. agregar link / btn eliminar a favoritos
//info 2. arreglar lista de cart en dropdown falta algo

//! FIX NAVBARS IN OTHER LOCATIONS =S
