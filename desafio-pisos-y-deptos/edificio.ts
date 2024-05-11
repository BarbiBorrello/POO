class Departamento {

  nombreDepto : string;

  constructor(nombreDepto: string) {
    this.nombreDepto= nombreDepto;
  }

  getName (){
    return this.nombreDepto;
  }
}

// ---- PRUEBAS: CREAR Y OBTENER NOMBRES DE LOS DEPARTAMENTOS --------//

// const depto1 = new Departamento ("depto uno");
// const depto2 = new Departamento ("depto dos");
// const depto3 = new Departamento ("depto tres");

// console.log(depto1.getName());
// console.log(depto2.getName());
// console.log(depto3.getName());


// ---------------------------------------------------------------//

export class Piso{

  nombrePiso :string;
  departamentos : Departamento[]; // trae clase Departamento

  constructor (nombrePiso : string) { // no hace falta que clase Departamento sea parte del parametro
    this.nombrePiso = nombrePiso;
    this.departamentos =[]; // inicializar el array Departamento vacio

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

// ---- PRUEBAS 1: CREAR Y OBTENER NOMBRES DE LOS PISOS --------//
// ---- PRUEBAS 2 : AGREGAR UN DEPARTAMENTO/S  A UN PISO --------//

// const unPiso = new Piso("planta baja");
// const otroPiso = new Piso("primer piso");

// // console.log(unPiso.getnombrePiso());
// // console.log(otroPiso.getnombrePiso());

// const unDepto = new Departamento ("depto 1")
// const otroDepto = new Departamento ("depto 2")


// console.log(unPiso.pushDepartamento(unDepto));
// console.log (unPiso.getDepartamentos());

class Edificio {
pisos : Piso [];


constructor(pisos : Piso []){
  this.pisos=pisos;

}

//**! Recibe un Departamento y lo ubique en el piso con el nombre indicado, si no existe un piso con ese nombre debe mostrar un error.*/
addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
  const piso = this.pisos.find(p => p.nombrePiso === nombreDePiso);
  if (piso) {
    piso.pushDepartamento(departamento);
  } else {
    console.error(`No se encontró un piso con el nombre "${nombreDePiso}".`);
  }
}

//**! Devuelve todos los departamentos de ese piso. Este método debe devolver un array de Departamento.*/

getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
  const piso = this.pisos.find(p => p.nombrePiso === nombreDePiso);
  if (piso) {
    return piso.getDepartamentos();
  } else {
    console.error(`No se encontró un piso con el nombre "${nombreDePiso}".`);
    return [];
  }
}


}

const unPiso = new Piso("planta baja");
const otroPiso = new Piso("primer piso");

const unEdificio = new Edificio([unPiso, otroPiso]);

console.log(unEdificio);

// unEdificio.addDepartamentoToPiso("planta baja", unDepto);
// unEdificio.addDepartamentoToPiso("primer piso", otroDepto);
// unEdificio.addDepartamentoToPiso("segundo piso", unDepto); // Mostrará un error

const departamentosPlantaBaja = unEdificio.getDepartamentosByPiso("planta baja");
console.log(departamentosPlantaBaja);