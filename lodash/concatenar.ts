/**Crea una nueva matriz que concatena una matriz 
 * con matrices y/o valores adicionales */

 import _ from 'lodash';
 

 const array1 = [1, 2, 3];
 const array2 = [4, 5, 6];
 
 const nuevoArray = _.concat(array1, array2);
 console.log(nuevoArray); // Output: [1, 2, 3, 4, 5, 6]