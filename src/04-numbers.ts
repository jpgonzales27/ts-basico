(() => {
  //implicita
  let productPrice = 1000;
  console.log(productPrice);

  //explicita
  let productPrice2: number = 100;
  // productPrice2 = productPrice2 + '1';
  console.log(productPrice2);

  let productInStock: number;
  // console.log(productInStock);

  //TypeScript
  let myNumber: number = 30;

  myNumber = myNumber + 10; //CORRECTO
  // myNumber = myNumber + '10'; //INCORRECTO

  let discount: number = parseInt('123');

  let numeroString: string = '100';
  let nuevoNumero: number;
  nuevoNumero = parseInt(numeroString);

  let numeroPrueba: number = parseInt('palabra');
  console.log(numeroPrueba); //NaN

  //Binarios: se definen colocando "0b" al inicio del valor
  let primerBinario = 0b1010; //CORRECTO
  // let segundobinario = 0b1210; //INCORRECTO. El 2 es inválido

  //Hexadecimales: se definen colocando "0x" al inicio del valor
  let primerHexa = 0xfff; //CORRECTO
  // let segundoHexa = 0xffz; //INCORRECTO. El "z" es inválido

  let primerHexa2 = 0xfff;
  console.log(primerHexa2); // 4095

  let primerBinario2 = 0b1010;
  console.log(primerBinario2); // 10
})();
