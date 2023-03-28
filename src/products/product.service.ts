import { Product } from './prodcut.model';
export const productos: Product[] = [];

export const addProduct = (data: Product) => {
  productos.push(data);
};

export const calcularStock = (): number => {
  let total = 0;
  productos.forEach((producto) => {
    total += producto.stock;
  });
  return total;
};
