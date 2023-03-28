(() => {
  const calcularTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((price) => {
      total += price;
    });
    return total;
  };

  const calcularTotal2 = (prices: number[]): string => {
    let total = 0;
    prices.forEach((price) => total += price);
    return total.toString()
  };

  const imprimirTotal = (prices:number[]):void=>{
    const result = calcularTotal2(prices)
    console.log(`El total es: ${result}`)
  }


  const result = calcularTotal([1,2,3,4,5])
  console.log(result)

  const result2 = calcularTotal2([1,2,3,4,5])
  console.log(result2)

  imprimirTotal([5,4,8,7])
})();
