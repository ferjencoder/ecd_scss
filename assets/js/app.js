const listProduct = document.getElementById('list-product'); //items
const templateProduct = document.getElementById('template-product').content; //templateCard
const fragment = document.createDocumentFragment();

console.log(templateProduct);

document.addEventListener('DOMContentLoaded', () => {
  fectchData();
});

const fectchData = async () => {
  try {
    const res = await fetch('../assets/js/api.json');
    const data = await res.json();
    console.log('DATA: ');
    console.log(data);
    renderProducts(data);
  } catch (error) {
    console.log(error);
  }
};

const renderProducts = (data) => {
  data.forEach((producto) => {
    templateProduct.querySelector('#productName').textContent = producto.nombre;
    templateProduct.querySelector('#productMaterial').textContent = producto.material;
    templateProduct.querySelector('#productAlto').textContent = producto.alto;

    //console.log(producto);

    const clone = templateProduct.cloneNode(true);
    console.log('FRAGMENT: ');
    console.log(fragment);

    fragment.appendChild(clone);
    console.log('frag' + fragment);
  });
  listProduct.appendChild(fragment);
};
