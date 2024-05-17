 // 1° import va en el index
import {sumarNumeros} from "./otro_modulo";
// antes era :  const modulo = require ("./")

function main() {
  console.log( "soy el main");
  console.log(sumarNumeros(1,1));
  
}

main();