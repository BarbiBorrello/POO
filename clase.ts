class Jugador {
  nombre: string;
  puntaje: number;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.puntaje = 0;
  }

  jugar() {
    console.log(`${this.nombre} está jugando.`);
  }
}
