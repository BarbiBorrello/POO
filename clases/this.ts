class Persona2 {
  nombre: string;
  fechaNacimiento: string;

  constructor(nombre: string, fechaNacimiento: string) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Fecha de Nacimiento: ${this.fechaNacimiento}`);
  }
}

// Crear dos objetos de la clase Persona
const persona = new Persona2("Juan", "1990-05-15");
const persona2 = new Persona2("María", "1985-08-20");

// Llamar al método mostrarInfo para cada objeto
console.log("Persona 1:");
persona.mostrarInfo();
console.log("Persona 2:");
persona2.mostrarInfo();
