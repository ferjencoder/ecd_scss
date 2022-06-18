//CARRITO SECTION - productos-effects.html
//DOM
let cart = [];
let cortinasLivianasDiv = document.querySelector('#productsList');

for (const producto of productos) {
  cortinasLivianasDiv.innerHTML += `
      <div class="col">
        <div class="card border-0">
        <figure class="position-relative m-0">
          <img src="${producto.productIMG[0]}" class="card-img-top" alt="${producto.descripcion}" />
          <button type="button" class="btn position-absolute top-0 end-0 shadow-none" id="liveToastBtnSeven">
            <span class="fa-solid fa-heart"></span>
          </button>
          <div type="div" class="btn ecd-btn-card position-absolute bottom-0 end-0" id="">$<span>${producto.precio}</span></div>
        </figure>
          <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="liveToastSeven" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="d-flex">
                <div class="toast-body">Agregaste ${producto.nombre} a <a href="../pages/favoritos.html">tus favoritos</a></div>
                <button type="button" class="btn-close me-2 m-auto shadow-none" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="clearfix">
              <ul class="d-flex p-0 pt-1 m-0 float-start">

                <li class="p-1 ps-0"><img src=${producto.swatch[0]}  class="cardSwatch" width="32" alt="Muestra material Classic Ivory"/></li>
                <li class="p-1"><img src=${producto.swatch[1]} class="cardSwatch" width="32" alt="Muestra material lino blanco" /></li>
                <li class="p-1"><img src=${producto.swatch[2]} class="cardSwatch" width="32" alt="Muestra material lino marfil" /></li>
              </ul>
              <span class="badge p-1 m-1 bg-success rounded-pill text-dark float-end mt-1 me-1">${producto.stock} en stock</span>
            </div>
            <h6 class="card-title fw-bold text-uppercase mb-0"><small>${producto.nombre}</small></h6>
            <p class="m-0">Material: ${producto.material}</p >
            <p class="m-0">Medidas: ${producto.alto}cm x ${producto.ancho}sm</p >
          </div>
        </div>
      </div>
    `;
}

//llamada a renderizar
// renderizarProductos();

// function renderizarProductos() {
//   for (const producto of productos) {
//   }
// }

// <li class="p-1 ps-0"><img src="../assets/img/swatches/Classic Belgian Flax Linen, Classic Ivory.jpg" class="cardSwatch" width="32" alt="Muestra material Classic Ivory" /></li>
// <li class="p-1"><img src="../assets/img/swatches/Classic Belgian Flax Linen, White.jpg" class="cardSwatch" width="32" alt="Muestra material lino blanco" /></li>
// <li class="p-1"><img src="../assets/img/swatches/Velvet Twill, Ivory.jpg" class="cardSwatch" width="32" alt="Muestra material lino marfil" /></li>
