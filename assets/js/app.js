//PENSAR PARA FAVOURITES
let cart = [];
const productList = document.getElementById('product-list'); //items
const productTemplate = document.getElementById('product-template').content; //templateCard
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
  fectchData();
});

productList.addEventListener('click', (e) => {
  addToCart(e);
});

const fectchData = async () => {
  try {
    const res = await fetch('../assets/js/api.json');
    const data = await res.json();
    // console.log('DATA: ');
    //console.log(data);
    renderProducts(data);
  } catch (error) {
    console.log(error);
  }
};

const renderProducts = (data) => {
  data.forEach((producto) => {
    productTemplate.querySelector('#product-name').textContent = producto.nombre;
    productTemplate.querySelector('#product-material').textContent = 'Material: ' + producto.material;
    productTemplate.querySelector('#product-alto').textContent = 'Medidas: ' + producto.medidas;
    productTemplate.querySelector('#product-img').setAttribute('src', producto.img500[0]);
    productTemplate.querySelector('#product-img').setAttribute('alt', producto.descripcion);

    //! crear for para iterar sobre los swatches y crear elements hasta 5 y luego añadir un
    //! "+3 más" text como link que lleve al producto tmb
    // console.log(producto.id + ' ' + producto.swatch.length);

    // producto.swatch.length >= 4 ? console.log('mayor que 4') : console.log('menor que 4');

    // if (producto.swatch.length >= 4) {
    //   for (let i = 0; i <= producto.swatch.length; i++) {
    //     productTemplate.querySelector('#product-swatch' + i++).setAttribute('src', producto.swatch[i]);

    //   }
    // }

    productTemplate.querySelector('#product-swatch1').setAttribute('src', producto.img40[0]);
    productTemplate.querySelector('#product-swatch2').setAttribute('src', producto.img40[1]);
    productTemplate.querySelector('#product-swatch3').setAttribute('src', producto.img40[2]);
    productTemplate.querySelector('#product-swatch4').setAttribute('src', producto.img40[3]);
    productTemplate.querySelector('#stock').textContent = producto.stock[0] + ' en stock';
    productTemplate.querySelector('#btn-comprar').textContent = '$ ' + producto.precio;
    productTemplate.querySelector('#btn-comprar').dataset.id = producto.id;

    // productTemplate.querySelector('toast-body').textContent = producto.nombre;

    //console.log(producto);

    const clone = productTemplate.cloneNode(true);

    fragment.appendChild(clone);
  });
  productList.appendChild(fragment);
};

const addToCart = (e) => {
  e.target.id.includes('btn-comprar') ? setCart(e.target.parentElement.parentElement) : '';
  e.stopPropagation;
};

const setCart = (obj) => {
  console.log(obj);
  const producto = {
    id: obj.querySelector('#btn-comprar').dataset.id,
  };
  console.log(producto);
};

// let btnFavouriteArray = [];

// btnFavouriteArray = document.querySelectorAll('btn-favourite');

// console.log(btnFavouriteArray);

// $('btn-comprar').hover(function (event) {
//   e.target.content = 'comprar';
// });
