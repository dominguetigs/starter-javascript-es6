const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 - map
const ages = usuarios.map(usuario => usuario.idade);
console.log(ages); // [23, 15, 30]

// 2.2 - filter
const filteredUsers = usuarios
  .filter(usuario => usuario.idade > 18 && usuario.empresa === 'Rocketseat');
console.log(filteredUsers); // [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

// 2.3 - find
const user = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(user); // undefined

// 2.4 - map and filter
const users = usuarios
  .map(usuario => {
    return {
      ...usuario,
      idade: usuario.idade * 2,
    }
  })
  .filter(usuario => usuario.idade <= 50);
console.log(users);
// [
//   { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
//   { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
// ]
