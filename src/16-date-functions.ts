import { subDays, format } from 'date-fns'


const fecha = new Date(1998,1,28)
const respuesta = subDays(fecha,30)

const cadena = format(respuesta,'yyyy-MM-dd')
console.log(cadena)
