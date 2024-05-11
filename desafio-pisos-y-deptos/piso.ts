
import {Departamento} from './departamento';

const depto1 = new Departamento ("depto uno");
const depto2 = new Departamento ("depto dos");
const depto3 = new Departamento ("depto tres");

console.log(depto1.getName());
console.log(depto2.getName());
console.log(depto3.getName());

class Piso{

  nombrePiso :string;
  departamentos : Departamento[]; // trae clase Departamento

  constructor (nombrePiso : string) { // no hace falta que clase Departemento sea parte del parametro
    this.nombrePiso = nombrePiso;
    this.departamentos =[]; // inicializar el array en 0

  }
  getnombrePiso(){
    return this.nombrePiso;
  }

  pushDepartamento(departamento : Departamento){
    this.departamentos.push(departamento);
  }

  getDepartamentos (){
    return this.departamentos;
  }

}

const unPiso = new Piso("planta baja");
const otroPiso = new Piso("primer piso");

// console.log(unPiso.getnombrePiso());
// console.log(otroPiso.getnombrePiso());

const deptoUno = new Departamento("depto uno");
const deptoDos = new Departamento("depto dos");
const deptoTres = new Departamento("depto tres");

console.log(unPiso);
console.log(unPiso.pushDepartamento(deptoUno));
console.log(unPiso);


