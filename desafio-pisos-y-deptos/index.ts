// crear las clases Edificio, Piso y Departamento aquí

class Departamento {

  name : string;

  constructor(name: string) {
    this.name= name;
  }

  getName (){
    return this.name;
  }
}

class Piso {
  name: string
  departamentos: Departamento[];

  constructor(name) {
    this.name = name;
    this.departamentos = [];
  }

  pushDepartamento(departamento){
    this.departamentos.push(departamento.getName());
    
  }

  getDepartamentos(){
    return this.departamentos.map(departamento => departamento.getName());
  }

  /** utiliza el método map() para iterar sobre el array de departamentos 
   * y devuelve un nuevo array con los nombres de los departamentos. */

}

class Edificio {
  pisos;

  constructor(arrayDePisos) {
    this.pisos = arrayDePisos;
  }

  addDepartamentoToPiso(nombreDePiso, departamento) {
    const pisoEncontrado = this.pisos.find(piso => piso.name === nombreDePiso);
    if (pisoEncontrado) {
      pisoEncontrado.pushDepartamento(departamento);
    } else {
      console.error("El piso indicado no existe en el edificio.");
    }
  }

  getDepartamentosByPiso(nombreDePiso) {
    const pisoEncontrado = this.pisos.find(piso => piso.name === nombreDePiso);
    if (pisoEncontrado) {
      return pisoEncontrado.getDepartamentos();
    } else {
      console.error("El piso indicado no existe en el edificio.");
      return [];
    }
  }
}


  


// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");

  const unEdificio = new Edificio([unPiso, otroPiso]);

  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");

  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
}
main();