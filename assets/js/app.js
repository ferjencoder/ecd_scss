const listProduct = document.getElementById('lista-product');
const templateProduct = document.getElementById('template-product').content;

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

const renderProducts = (data) => {
  console.log(data);
};
