import { productos, addProduct, calcularStock } from "./product.service";


addProduct({
  name: 'P1',
  createAt: new Date(),
  stock: 10,
  size: 'M',
});

addProduct({
  name: 'P2',
  createAt: new Date(),
  stock: 4,
});

console.log(productos)
console.log(calcularStock())

