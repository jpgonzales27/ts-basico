(() => {
  type Syzes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createAt: Date;
    stock: number;
    size?: Syzes;
  }

  const login = (email: string, password: string) => {
    console.log(email, password);
  };

  login('jp@gmail.com', '1234');

  const login2 = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login2({
    email: 'correo@gmail.com',
    password: '123',
  });

  const productos: Product[] = [];

  const addProduct = (data: Product) => {
    productos.push(data);
  };

  addProduct({
    title: 'P1',
    createAt: new Date(),
    stock: 10,
    size: 'M',
  });

  addProduct({
    title: 'P2',
    createAt: new Date(),
    stock: 4,
  });

  console.log(productos);
})();
