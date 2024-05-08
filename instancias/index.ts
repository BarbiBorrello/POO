class Persona_I {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;

  constructor(nombre: string, apellido: string, fechaNacimiento: Date) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
  }

  getEdad(): number {
    const today = new Date();
    const diferenciaEntreFechas = today.getFullYear() - this.fechaNacimiento.getFullYear();
    
    // Verificar si aún no ha pasado el cumpleaños de la persona este año
    if (
      today.getMonth() < this.fechaNacimiento.getMonth() ||
      (today.getMonth() === this.fechaNacimiento.getMonth() && today.getDate() < this.fechaNacimiento.getDate())
    ) {
      return diferenciaEntreFechas - 1;
    } else {
      return diferenciaEntreFechas;
    }
  }
}

const laura = new Persona_I("Laura", "Vitale", new Date("1995-08-05"));

console.log(`${laura.nombre} ${laura.apellido} tiene ${laura.getEdad()} años.`);

/**
 * ? Instanciar objetos es el proceso de generar un ejemplar de una clase,
 */

//---------------- EJEMPLOS ----------------------------//

// const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
// const libro2 = new Libro("AAAAAAA", "bbbbbbbbbb", 1501);

// const peli = new Peli("Una peli", 5);
// const peli2 = new Peli("Otra peli", 1);

// const miRectangulo = new Rectangulo(5, 10);

// const persona1 = new Persona("Juan", "1990-05-15");
// const persona2 = new Persona("María", "1985-08-20");

// const persona1 = new Persona("Juan", "Perez", new Date(1990, 5, 15));
