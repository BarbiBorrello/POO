 export class Departamento {

  nombreDepto : string;

  constructor(nombreDepto: string) {
    this.nombreDepto= nombreDepto;
  }

  getName (){
    return this.nombreDepto;
  }
}

// const depto1 = new DepartamentoP ("depto uno");
// const depto2 = new DepartamentoP ("depto dos");
// const depto3 = new DepartamentoP ("depto tres");

// console.log(depto1.getName());
// console.log(depto2.getName());
// console.log(depto3.getName());
