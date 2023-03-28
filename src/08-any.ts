(() => {
  let myDynamicValue: any;
  myDynamicValue = 100;
  myDynamicValue = null;
  myDynamicValue = {};
  myDynamicValue = '';

  myDynamicValue = 'Hola';
  const cadena = (myDynamicValue as string).toLowerCase();
  console.log(cadena);

  myDynamicValue = 100;
  const numero = (<number> myDynamicValue).toFixed()
  console.log(numero);
})();
