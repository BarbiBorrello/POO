class Persona {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;

  constructor(nombre: string, apellido: string, fechaNacimiento: Date) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
  }

  getEdad(): number {
    const fechaActual = new Date();
    const tiempoDiferencia =
      fechaActual.getTime() - this.fechaNacimiento.getTime();
    const edad = Math.floor(tiempoDiferencia / (1000 * 3600 * 24 * 365.25));
    return edad;
  }
}

// Crear una instancia de la clase Persona
const persona1 = new Persona("Juan", "Perez", new Date(1990, 5, 15));

// Obtener y mostrar la edad de la persona
const edad = persona1.getEdad();
console.log(`${persona1.nombre} ${persona1.apellido} tiene ${edad} años.`);
