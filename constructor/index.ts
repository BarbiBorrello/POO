class Persona {
  nombre:string;
  apellido:string;
  fechaNacimiento:Date;

  constructor(nombreParaArrancar){
     this.nombre = nombreParaArrancar;
     }
     
  getEdad(){
     const today = new Date();
     const diferenciaEntreFechas = (today - this.fechaDeNacimiento)
     // y todo lo demás para calcular la edad
     }
}
const laura = new Persona("laura");
console.log(laura.nombre);
// laura