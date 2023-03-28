(()=>{
  let myUnionVar: string|number;
  myUnionVar = 12312;
  myUnionVar = 'hola'

  function greeting(myText:string|number){
    if(typeof myText === 'string') {
      console.log(`String: ${myText.toLowerCase()}`);
    }else{
      console.log(`number: ${myText.toFixed(1)}`);
    }
  }

  greeting('hello');
  greeting(12.33)
})()
