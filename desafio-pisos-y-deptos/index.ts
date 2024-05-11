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

class Edificio {
  pisos : Piso [];


constructor(pisos : Piso []){
  this.pisos=pisos;

  
}

addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
  const piso = this.pisos.find(p => p.nombrePiso === nombreDePiso);
  if (piso) {
    piso.pushDepartamento(departamento);
  } else {
    console.error(`No se encontró un piso con el nombre "${nombreDePiso}".`);
  }
}

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