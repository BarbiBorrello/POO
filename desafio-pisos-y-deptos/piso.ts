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

  pushDepartamento(departamento : Departamento){ /** AGREGA DEPARTAMENTO */
    this.departamentos.push(departamento);
  }

  getDepartamentos (){ // OBTIENE LOS DEPARTAMENTOS AGREGADOS
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







