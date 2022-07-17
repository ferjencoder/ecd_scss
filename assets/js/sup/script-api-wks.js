//ULTIMO WORKING - producto-api-gal.html
//console.log(cart);

let cart = JSON.parse(localStorage.getItem('cart')) || [];

let productoSelected = 1654981998447;

document.addEventListener('DOMContentLoaded', () => {
  fectchData();
});

const fectchData = async () => {
  try {
    const res = await fetch(`../assets/js/api.json`);
    const data = await res.json();
    console.log(data);
    renderProducts(data);
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const almohadonesDiv = document.getElementById('productList');

const renderProducts = (data) => {
  data.forEach((producto) => {
    if (producto.id === productoSelected) {
      almohadonesDiv.innerHTML += `
      <div class="col">
        <div class="row g-4">
              <div class="col-1 swiper swiper-container swiper-initialized swiper-vertical d-flex clearfix">
                <div class="swiper-wrapper list-group list-group-flush m-0 p-0 d-flex border-0" id="list-tab" data-bs-spy="scroll" data-bs-smooth-scroll="true" role="tablist" width="110" height="auto">
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 pt-0 list-group-item-action border-0 bg-transparent active" id="list-list" data-bs-toggle="list" href="#list" role="tab" aria-controls="list-home">
                      <img class="img-fluid" src="${producto.img100[0]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-one-list" data-bs-toggle="list" href="#list-one" role="tab" aria-controls="list-profile">
                      <img class="img-fluid" src="${producto.img100[1]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-two-list" data-bs-toggle="list" href="#list-two" role="tab" aria-controls="list-profile">
                      <img class="img-fluid" src="${producto.img100[2]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-three-list" data-bs-toggle="list" href="#list-three" role="tab" aria-controls="list-messages">
                      <img class="img-fluid" src="${producto.img100[3]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-four-list" data-bs-toggle="list" href="#list-four" role="tab" aria-controls="list-settings">
                      <img class="img-fluid" src="${producto.img100[4]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-five-list" data-bs-toggle="list" href="#list-five" role="tab" aria-controls="list-settings">
                      <img class="img-fluid" src="${producto.img100[5]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 pt-0 list-group-item-action border-0 bg-transparent" id="list-six-list" data-bs-toggle="list" href="#list-six" role="tab" aria-controls="list-settings">
                      <img class="img-fluid" src="${producto.img100[6]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent active" id="list-seven-list" data-bs-toggle="list" href="#list-seven" role="tab" aria-controls="list-home">
                      <img class="img-fluid" src="${producto.img100[7]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-eight-list" data-bs-toggle="list" href="#list-eight" role="tab" aria-controls="list-profile">
                      <img class="img-fluid" src="${producto.img100[8]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-nine-list" data-bs-toggle="list" href="#list-nine" role="tab" aria-controls="list-profile">
                      <img class="img-fluid" src="${producto.img100[9]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-ten-list" data-bs-toggle="list" href="#list-ten" role="tab" aria-controls="list-messages">
                      <img class="img-fluid" src="${producto.img100[10]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-eleven-list" data-bs-toggle="list" href="#list-eleven" role="tab" aria-controls="list-settings">
                      <img class="img-fluid" src="${producto.img100[11]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-twelve-list" data-bs-toggle="list" href="#list-twelve" role="tab" aria-controls="list-settings">
                      <img class="img-fluid" src="${producto.img100[12]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-thirteen-list" data-bs-toggle="list" href="#list-thirteen" role="tab" aria-controls="list-settings">
                      <img class="img-fluid" src="${producto.img100[13]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-fourteen-list" data-bs-toggle="list" href="#list-fourteen" role="tab" aria-controls="list-settings">
                      <img class="img-fluid" src="${producto.img100[14]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="list-group-item m-0 p-1 list-group-item-action border-0 bg-transparent" id="list-fifteen-list" data-bs-toggle="list" href="#list-fifteen" role="tab" aria-controls="list-settings">
                      <img class="img-fluid" src="${producto.img100[15]}" width="89" height="auto" alt="${producto.descripcion}" />
                    </a>
                  </div>
                </div>
                <div class="swiper-button-prev shadow-none ecd-btn-prev m-0 p-0 float-start">
                  <i class="fa-solid fa-angles-up fa-xl"></i>
                </div>
                <div class="swiper-button-next shadow-none ecd-btn-next m-0 p-0 float-end">
                  <i class="fa-solid fa-angles-down fa-xl"></i>
                </div>
              </div>
              <div class="col-6">
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane text-start fade show active" id="list" role="tabpanel" aria-labelledby="list-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[0]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-one" role="tabpanel" aria-labelledby="list-one-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[1]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-two" role="tabpanel" aria-labelledby="list-two-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[2]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-three" role="tabpanel" aria-labelledby="list-three-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[3]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-four" role="tabpanel" aria-labelledby="list-four-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[4]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-five" role="tabpanel" aria-labelledby="list-five-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[5]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-six" role="tabpanel" aria-labelledby="list-six-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[6]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-seven" role="tabpanel" aria-labelledby="list-seven-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[7]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-eight" role="tabpanel" aria-labelledby="list-eight-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[8]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-nine" role="tabpanel" aria-labelledby="list-nine-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[9]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-ten" role="tabpanel" aria-labelledby="list-ten-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[10]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-eleven" role="tabpanel" aria-labelledby="list-eleven-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[11]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-twelve" role="tabpanel" aria-labelledby="list-twelve-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[12]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-thirteen" role="tabpanel" aria-labelledby="list-thirteen-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[13]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-fourteen" role="tabpanel" aria-labelledby="list-fourteen-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[14]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-fifteen" role="tabpanel" aria-labelledby="list-fifteen-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img1000[15]}" width="600" height="auto" alt="${producto.descripcion}" />
                  </div>
                </div>
              </div>
              <div class="col-5">
                <ul class="small-photos p-0 list-group-flush">
                  <li class="ecd-border-bt mb-3"><h2 class="text-uppercase text-serif h4">Almohadón Tusor Cuadrado</h2></li>
                  <li class="ecd-border-bt mb-3"><p>Comfy Pillow. Funda lavable.</p></li>
                  <li class="m-0 p-0"><p class="m-0 p-0">MATERIAL: ${producto.material}.</p></li>
                  <li class="m-0 p-0 mb-3"><p class="m-0 p-0">MEDIDAS: ${producto.alto}cm x ${producto.ancho}cm, con relleno.</p></li>
                  <!-- <li class="mb-3 p-0"><p class="m-0 p-0">${producto.stock[0]}</p></li> -->
                  <li class="mb-2">
                    <h6 class="text-uppercase text-primary">
                      <strong>Color seleccionado: <span>1</span></strong>
                    </h6>
                  </li>
                  <li>
                    <div class="list-group list-group-flush list-group-horizontal overflow-hidden m-0 p-0 border-0 d-inline-flex" id="list-tab" role="tablist">
                      <div class="list-group-item m-0 p-1 btn text-center list-group-item-action border-0" id="list-one-list" data-bs-toggle="list" href="#list-one" role="tab" aria-controls="list-profile">
                        <img class="img-thumbnail ecd-shadow m-0 p-0" src=${producto.img40[0]} width="35" height="30" alt=${producto.colors[0]} data-bs-toggle="tooltip" data-bs-placement="bottom" title=${producto.colors[0].toUpperCase()} data-bs-custom-class="ecd-tooltip" />
                      </div>
                      <div class="list-group-item m-0 p-1 btn border-0 text-center list-group-item-action" id="list-five-list" data-bs-toggle="list" href="#list-five" role="tab" aria-controls="list-messages">
                        <img class="img-thumbnail ecd-shadow m-0 p-0" src=${producto.img40[1]} width="35" height="30" alt=${producto.colors[1]} data-bs-toggle="tooltip" data-bs-placement="bottom" title=${producto.colors[1].toUpperCase()} data-bs-custom-class="ecd-tooltip" />
                      </div>
                      <div class="list-group-item m-0 p-1 btn border-0 text-center list-group-item-action" id="list-nine-list" data-bs-toggle="list" href="#list-nine" role="tab" aria-controls="list-settings">
                        <img class="img-thumbnail ecd-shadow m-0 p-0" src=${producto.img40[2]} width="35" height="30" alt=${producto.colors[2]} data-bs-toggle="tooltip" data-bs-placement="bottom" title=${producto.colors[2].toUpperCase()} data-bs-custom-class="ecd-tooltip" />
                      </div>
                      <div class="list-group-item m-0 p-1 btn border-0 text-center list-group-item-action" id="list-thirteen-list" data-bs-toggle="list" href="#list-thirteen" role="tab" aria-controls="list-things">
                        <img class="img-thumbnail ecd-shadow m-0 p-0" src=${producto.img40[3]} width="35" height="30" alt=${producto.colors[3]} data-bs-toggle="tooltip" data-bs-placement="bottom" title=${producto.colors[3].toUpperCase()} data-bs-custom-class="ecd-tooltip" />
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item text-center ecd-border-bt mt-5 pb-3">
                    <button class="btn ecd-btn-outlined w-100 shadow-none" type="submit" id="finalizarCompra" aria-label="Finalizar la compra">AGREGAR AL CARRITO</button>
                  </li>
                  <li class="list-group-item text-center ecd-border-bt">CONOCÉ LAS CUOTAS CON TU TARJETA</li>
                  <li class="list-group-item text-center border-0 mt-2">
                    <button class="btn ecd-btn-outlined-muted w-100 shadow-none" type="submit" aria-label="Continuar comprando">CONTINUAR COMPRANDO</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      `;
    }
  });
  almohadonesDiv.appendChild(producto);
};
