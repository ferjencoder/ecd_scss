class Producto {
  constructor(id, nombre, productor, tipo, material, alto, ancho, colors, precio, descripcion, stock, productURL, productIMG) {
    this.id = Date.now();
    this.nombre = nombre;
    this.productor = productor;
    this.tipo = tipo;
    this.material = material;
    this.alto = alto;
    this.ancho = ancho;
    this.colors = [];
    this.precio = precio;
    this.descripcion = descripcion;
    this.stock = stock;
    this.productURL = productURL;
    this.productIMG = [];
  }

  mostrarDescripcion() {
    console.log(`
      ${this.id}
      ${this.nombre}
      ${this.material}
      ${this.alto}
      ${this.ancho}
      ${this.descripcion}
      ${this.productURL}
      `);
  }
}

let swatch = ['arcilla', 'cambray', 'eucaliptus', 'lino'];

// colors: [
//   { color: 'arcilla', stock: 10, swatch: '../assets/img/productos/al/ecd-al-rustico-lino-01-630x567c-arcilla.jpg' },
//   { color: 'cambray', stock: 0, swatch: '../assets/img/productos/al/ecd-al-rustico-lino-01-60x54s-cambray.jpg' },
//   { color: 'eucaliptus', stock: 10, swatch: '../assets/img/productos/al/ecd-al-rustico-lino-01-60x54s-eucaliptus.jpg' },
//   { color: 'lino', stock: 0, swatch: '../assets/img/productos/al/ecd-al-rustico-lino-01-60x54s-lino.jpg' },
// ],

let producto1 = new Producto(
  Producto.id,
  'Almohadon Tusor Cuadrado',
  'ecd',
  'almohadón',
  'lino',
  50,
  50,
  // Producto.colors.push({ color: 'arcilla', stock: 10, swatch: '../assets/img/productos/al/ecd-al-rustico-lino-01-630x567c-arcilla.jpg' }),
  // Producto.colors.push('arcilla', 10, '../assets/img/productos/al/ecd-al-rustico-lino-01-630x567c-arcilla.jpg'),
  { color: 'arcilla', stock: 10, swatch: '../assets/img/productos/al/ecd-al-rustico-lino-01-60x54s-arcilla.jpg' },
  4750,
  'Almohadón de tusor composición lino natural de 50cm x 50cm con relleno. Funda lavable.',
  10,
  `../pages/${Date.now()}.html`,
  // productIMG.push('../assets/img/productos/al/ecd-al-rustico-lino-01-630x567.jpg')
  { productIMG1: '../assets/img/productos/al/ecd-al-rustico-lino-01-630x567.jpg' }
);

console.log(producto1);
console.log(producto1.mostrarDescripcion());

// class colores extends Producto {
//   constructor(colores) {
//     super();
//     this.color1 = color1;
//     this.swatch1 = swatch1;
//     this.producto1 = producto1;
//     this.color2 = color2;
//     this.swatch2 = swatch2;
//     this.producto2 = producto2;
//     this.color3 = color3;
//     this.swatch3 = swatch3;
//     this.producto3 = producto3;
//     this.color4 = color4;
//     this.swatch4 = swatch4;
//     this.producto4 = producto4;
//   }
// }

// this.color1: 'arcilla';
// this.swatch1: '../assets/img/productos/al/ecd-al-rustico-lino-01-60x54s-arcilla.jpg';
// this.producto1: '../assets/img/productos/al/ecd-al-rustico-lino-01-630x567c-arcilla.jpg';
// this.color2: 'cambray';
// this.swatch2: '../assets/img/productos/al/ecd-al-rustico-lino-01-60x54s-cambray.jpg';
// this.producto2: '';
// this.color3: 'eucaliptus';
// this.swatch3: '../assets/img/productos/al/ecd-al-rustico-lino-01-60x54s-eucaliptus.jpg';
// this.producto3: '';
// this.color4: 'lino';
// this.swatch4: '../assets/img/productos/al/ecd-al-rustico-lino-01-60x54s-lino.jpg';
// this.producto4: '';
