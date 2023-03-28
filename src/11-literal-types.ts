type Syzes = 'S' | 'M' | 'L' | 'XL';

let shirtSyzes: Syzes;

shirtSyzes = 'M';
shirtSyzes = 'L';
shirtSyzes = 'XL';
shirtSyzes = 'S';

function showSyze(syze: Syzes) {
  console.log(syze);
}

showSyze('L');
