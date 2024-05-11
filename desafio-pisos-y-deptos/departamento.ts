
/**El constructor debe recibir el nombre de ese departamento con formato de texto. Por ejemplo: "mi depto".
Debe tener un método getName() que devuelva el nombre del departamento. */

class DepartamentoP {

  nombreDepto : string;

  constructor(nombreDepto: string) {
    this.nombreDepto= nombreDepto;
  }

  getName (){
    return this.nombreDepto;
  }
}

const depto1 = new DepartamentoP ("depto uno");
const depto2 = new DepartamentoP ("depto dos");
const depto3 = new DepartamentoP ("depto tres");

console.log(depto1.getName());
console.log(depto2.getName());
console.log(depto3.getName());

