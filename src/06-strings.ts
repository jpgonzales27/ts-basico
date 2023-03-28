(() => {
  let myProduct = 'Soda'; //CORRECTO
  let myProduct2: string = 'PC'; //CORRECTO
  let comillasDobles = 'Puedo "usar" comillas dobles tambien'; //CORRECTO
  // let comillaInvalida = 'No puedo 'usar' otra vez una comilla simple'; //INCORRECTO

  let comillaSimple = "Puedo 'usar' comilla simple tambien"; //CORRECTO
  // let comillaInvalida = "No puedo "usar" otra vez las comillas dobles"; //INCORRECTO

  let texto = `
    Nunca
    pares
    de aprender :)
`;
  console.log(texto);

  let variableTitulo = 'TypeScript';
  let summary = `
    title: ${variableTitulo}
`;
  console.log(summary);
})();
