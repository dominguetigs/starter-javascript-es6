// 5.1 - Rest
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function sum(...numbers) {
  return numbers.reduce((accumulate, current) => accumulate + current);
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sum(1, 2)); // 3


// 5.2 - Spread
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  },
};

const usuario2 = {
  ...usuario,
  nome: 'Gabriel',
};

const { endereco } = usuario;
const usuario3 = {
  ...usuario,
  endereco: {
    ...endereco,
    cidade: 'Lontras',
  },
};

console.log(usuario);
console.log(usuario2);
console.log(usuario3);
