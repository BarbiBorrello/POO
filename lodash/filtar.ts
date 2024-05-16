import _ from 'lodash';

const users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred','age': 40, 'active': false },
  { 'user': 'Barbi','age': 47, 'active': true },
  { 'user': 'Pablin','age': 45, 'active': false },
];

const usuariosActivos = _.filter(users, 'active');
console.log(usuariosActivos);

const usuariosInactivos = _.filter(users, ['active', false]);
console.log(usuariosInactivos);
//_.filter(users, function(o) { return !o.active; });

const usuarios_Edad_Activos = _.filter(users, { 'age': 36, 'active': true });
console.log(usuarios_Edad_Activos);





