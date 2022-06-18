const productList = document.getElementById('product-list'); //items
const productTemplate = document.getElementById('product-template').content; //templateCard
const fragment = document.createDocumentFragment();

console.log(productTemplate);

document.addEventListener('DOMContentLoaded', () => {
  fectchData();
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
    productTemplate.querySelector('#product-material').textContent = producto.material;
    productTemplate.querySelector('#product-alto').textContent = producto.alto;
    productTemplate.querySelector('#product-ancho').textContent = producto.ancho;
    productTemplate.querySelector('#product-img').setAttribute('src', producto.productIMG[0]);
    // productTemplate.querySelector('#product-img').setAttribute('alt', producto.descripcion);
    // productTemplate.querySelector('toast-body').textContent = producto.nombre;

    //console.log(producto);

    const clone = productTemplate.cloneNode(true);
    // console.log('FRAGMENT: ');
    // console.log(fragment);

    fragment.appendChild(clone);
    // console.log('FRAGMENT: ');
    // console.log(fragment);
  });
  productList.appendChild(fragment);
};
