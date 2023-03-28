// var _ = require('lodash');

import _ from 'lodash';

const data = [
  {
    username: 'jp',
    role: 'admin',
  },
  {
    username: 'jp1',
    role: 'seller',
  },
  {
    username: 'jp2',
    role: 'seller',
  },
];


const respuesta = _.groupBy(data, (item) => item.role)

console.log(respuesta);

const rta = 1 + '1'
console.log(rta);

