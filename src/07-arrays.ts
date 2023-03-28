(()=>{
  const prices = [1,2,3,4,5,6]
  prices.push(10)


  const products = ['hola',123,false]

  const mixed: (number|string|boolean|object)[] = [123,'hola']
  mixed.push(true)
  mixed.push(12)
  mixed.push('as')
  mixed.push({})
  mixed.push([])
})()
