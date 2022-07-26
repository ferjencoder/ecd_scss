// EXPORTING MODULE
console.log('EXPORTING MODULE');

// document.addEventListener('DOMContentLoaded', () => {
//   fectchDataJSON();
//   //renderNavbars(cart);
// });

// NAMED EXPORT
export const fectchDataJSON = async () => {
  //const dataJSON = [];
  console.log('HOLA MUNDO!');
  try {
    const res = await fetch('../assets/js/api.json');
    const dataJSON = await res.json();
    // console.log(res.json());
    createProductsArray(dataJSON);
    return dataJSON;
    // return await res.json();
    // return await res.json();
  } catch (error) {
    console.error(`Disculpas! algo salió mal. Por favor, intente de nuevo o contacte al admin.`);
    console.error(error);
  }
};

// fectchDataJSON();

// export { fectchDataJSON };

export const init = async () => {
  fectchDataJSON();
  createProductsArray();
  //(await obtenerUsuarios()).forEach(crearFilaUsuario);
};
const createProductsArray = (dataJSON) => {
  let productsArray = [];
  dataJSON.forEach((product) => {
    productsArray.push(product);
  });
  console.log('ProductsArray: ', productsArray);
  return productsArray;
  // localStorage.setItem('productsArray', JSON.stringify(productsArray));
};
//console.log({ productsArray });
