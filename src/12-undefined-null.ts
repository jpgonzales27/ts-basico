(() => {
  let myNumber: number;
  let myString: string;

  //null y undefined son tipos de datos
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber2: number | null = null;
  myNumber2 = 123;

  let myString2: string | undefined = undefined;
  myString2 = 'hola';

  function hi(name: string | null) {
    let hello = 'hola ';
    if (name) {
      hello += name.toUpperCase();
    } else {
      hello += 'nobody';
    }

    console.log(hello);
  }

  function hiV2(name: string | null) {
    let hello = 'hola ';
    hello += name?.toLowerCase() || 'nobody'; //optional changing ?.
    console.log(hello);
  }

  function hiV3(name: string | null) {
    let hello = 'hola ';
    hello += name?.toLowerCase() ?? 'nobody'; //nullish coalescing ??
    console.log(hello);
  }

  hi(null);
  hi('Juan Pablo');

  hiV2(null);
  hiV2('Juan Pablo');
})();
