class Libro {
  titulo: string;
  autor: string;
  añoPublicacion: number;

  constructor(titulo: string, autor: string, añoPublicacion: number) {
      this.titulo = titulo;
      this.autor = autor;
      this.añoPublicacion = añoPublicacion;
      // [Tu código para inicializar las otras propiedades]
  }
  getAntiguedad() : number {
    const añoActual = new Date().getFullYear();
 const publicacion = añoActual-this.añoPublicacion;
 return publicacion;

      // [Tu código para devolver la antiguedad basada en la propiedad this.añoPublicacion]
  }
}

// Creando instancias de la clase Libro
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
// [Tu código para el segundo libro]
const libro2 = new Libro("AAAAAAA", "bbbbbbbbbb", 1501);

