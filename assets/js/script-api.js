//CARRITO SECTION - productos-effects.html
//DOM

let cart = [];

let productoSelected = 1654981998449;
// let cartEnLS = JSON.stringify(localStorage.getItem('cart'));

document.addEventListener('DOMContentLoaded', () => {
  fectchData();
});

const fectchData = async () => {
  try {
    const res = await fetch('../assets/js/api.json');
    const data = await res.json();
    console.log(data);
    renderProducts(data);
  } catch (error) {
    console.log(error);
  }
};

let cortinasLivianasDiv = document.querySelector('#productList');
console.log(cortinasLivianasDiv);

//llamada a renderizar
// renderizarProductos();

const renderProducts = (data) => {
  for (const producto of data) {
    producto.id === productoSelected
      ? (cortinasLivianasDiv.innerHTML = `
        <div class="row g-4">
              <div class="col-1">
                <div class="list-group list-group-flush m-0 p-0 d-flex border-0" id="list-tab" data-bs-spy="scroll" data-bs-smooth-scroll="true" role="tablist" width="110" height="501">
                  <a class="list-group-item m-0 p-1 pt-0 text-center list-group-item-action border-0 bg-transparent active" id="list-list" data-bs-toggle="list" href="#list" role="tab" aria-controls="list-home">
                    <img class="img-fluid" src="${producto.img100[0]}" width="89" height="auto" alt="" />
                  </a>
                  <a class="list-group-item m-0 p-1 text-center list-group-item-action border-0 bg-transparent" id="list-one-list" data-bs-toggle="list" href="#list-one" role="tab" aria-controls="list-profile">
                    <img class="img-fluid" src="${producto.img100[1]}" width="89" height="auto" alt="" />
                  </a>
                  <a class="list-group-item m-0 p-1 text-center list-group-item-action border-0 bg-transparent" id="list-two-list" data-bs-toggle="list" href="#list-two" role="tab" aria-controls="list-profile">
                    <img class="img-fluid" src="${producto.img100[2]}" width="89" height="auto" alt="" />
                  </a>
                  <a class="list-group-item m-0 p-1 text-center list-group-item-action border-0 bg-transparent" id="list-three-list" data-bs-toggle="list" href="#list-three" role="tab" aria-controls="list-messages">
                    <img class="img-fluid" src="${producto.img100[3]}" width="89" height="auto" alt="" />
                  </a>
                  <a class="list-group-item m-0 p-1 text-center list-group-item-action border-0 bg-transparent" id="list-four-list" data-bs-toggle="list" href="#list-four" role="tab" aria-controls="list-settings">
                    <img class="img-fluid" src="${producto.img100[4]}" width="89" height="auto" alt="" />
                  </a>
                  <a class="list-group-item m-0 p-1 text-center list-group-item-action border-0 bg-transparent" id="list-five-list" data-bs-toggle="list" href="#list-five" role="tab" aria-controls="list-settings">
                    <img class="img-fluid" src="${producto.img100[5]}" width="89" height="auto" alt="" />
                  </a>
                  <a class="list-group-item m-0 p-1 text-center list-group-item-action border-0 bg-transparent" id="list-six-list" data-bs-toggle="list" href="#list-six" role="tab" aria-controls="list-settings">
                    <img class="img-fluid" src="${producto.img100[6]}" width="89" height="auto" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-6">
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane text-start fade show active" id="list" role="tabpanel" aria-labelledby="list-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img500[0]}" width="630" height="auto" alt="" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-one" role="tabpanel" aria-labelledby="list-one-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img500[1]}" width="630" height="auto" alt="" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-two" role="tabpanel" aria-labelledby="list-two-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img500[2]}" width="630" height="auto" alt="" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-three" role="tabpanel" aria-labelledby="list-three-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img500[3]}" width="630" height="auto" alt="" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-four" role="tabpanel" aria-labelledby="list-four-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img500[4]}" width="630" height="auto" alt="" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-five" role="tabpanel" aria-labelledby="list-five-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img500[5]}" width="630" height="auto" alt="" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-six" role="tabpanel" aria-labelledby="list-six-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img500[6]}" width="630" height="auto" alt="" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-seven" role="tabpanel" aria-labelledby="list-seven-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img500[7]}" width="630" height="auto" alt="" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-eight" role="tabpanel" aria-labelledby="list-eight-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img500[8]}" width="630" height="auto" alt="" />
                  </div>
                  <div class="tab-pane text-start fade" id="list-nine" role="tabpanel" aria-labelledby="list-nine-list">
                    <img class="img-fluid ecd-shadow" src="${producto.img500[9]}" width="630" height="auto" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-5">
                <ul class="small-photos p-0 list-group-flush">
                  <li class="ecd-border-bt mb-3"><h2 class="text-uppercase text-serif h4">Almohadón Tusor Cuadrado</h2></li>
                  <li class="ecd-border-bt mb-3"><p>Comfy Pillow. Funda lavable.</p></li>
                  <li class="m-0 p-0"><p class="m-0 p-0">MATERIAL: ${producto.material}.</p></li>
                  <li class="m-0 p-0"><p class="m-0 p-0">MEDIDAS: ${producto.alto}cm x ${producto.ancho}cm, con relleno.</p></li>
                  <li class="mb-3 p-0"><p class="m-0 p-0">${producto.stock}</p></li>
                  <li class="mb-2">
                    <h6 class="text-uppercase text-primary">
                      <strong>Selecciona el color: <span>1</span></strong>
                    </h6>
                  </li>
                  <li>
                    <div class="list-group list-group-flush list-group-horizontal overflow-hidden m-0 p-0 border-0 d-inline-flex" id="list-tab" role="tablist">
                      <a class="list-group-item m-0 p-1 text-center list-group-item-action border-0" id="list-one-list" data-bs-toggle="list" href="#list-one" role="tab" aria-controls="list-profile">
                        <img class="img-thumbnail ecd-shadow m-0 p-0" src="${producto.img40[0]}" width="35" height="30" alt="Almohadón tusor cuadrado color arcilla" />
                      </a>
                      <a class="list-group-item m-0 p-1 border-0 text-center list-group-item-action" id="list-two-list" data-bs-toggle="list" href="#list-two" role="tab" aria-controls="list-messages">
                        <img class="img-thumbnail ecd-shadow m-0 p-0" src="${producto.img40[1]}" width="35" height="30" alt="Almohadón tusor cuadrado color cambray" />
                      </a>
                      <a class="list-group-item m-0 p-1 border-0 text-center list-group-item-action" id="list-three-list" data-bs-toggle="list" href="#list-three" role="tab" aria-controls="list-settings">
                        <img class="img-thumbnail ecd-shadow m-0 p-0" src="${producto.img40[2]}" width="35" height="30" alt="Almohadón tusor cuadrado color eucaliptus" />
                      </a>
                      <a class="list-group-item m-0 p-1 border-0 text-center list-group-item-action" id="list-four-list" data-bs-toggle="list" href="#list-four" role="tab" aria-controls="list-settings">
                        <img class="img-thumbnail ecd-shadow m-0 p-0" src="${producto.img40[3]}" width="35" height="30" alt="Almohadón tusor cuadrado color lino" />
                      </a>
                      <a class="list-group-item m-0 p-1 border-0 text-center list-group-item-action" id="list-five-list" data-bs-toggle="list" href="#list-five" role="tab" aria-controls="list-settings">
                        <img class="img-thumbnail ecd-shadow m-0 p-0" src="${producto.img40[4]}" width="35" height="30" alt="Almohadón tusor cuadrado color lino" />
                      </a>
                    </div>
                  </li>
                  <li class="list-group-item text-center ecd-border-bt mt-5 pb-3">
                    <button class="btn ecd-btn-outlined shadow-none" type="submit" id="finalizarCompra" aria-label="Finalizar la compra">AGREGAR AL CARRITO</button>
                  </li>
                  <li class="list-group-item text-center ecd-border-bt">CONOCE LAS CUOTAS CON TU TARJETA</li>
                  <li class="list-group-item text-center border-0 mt-2">
                    <button class="btn ecd-btn-outlined-muted shadow-none" type="submit" aria-label="Continuar comprando">CONTINUAR COMPRANDO</button>
                  </li>
                </ul>
              </div>
            </div>
      `)
      : console.log('error ' + producto.id);
  }
};
