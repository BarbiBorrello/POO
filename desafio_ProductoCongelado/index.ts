import { Producto } from "../desafio_ProductoAlimenticio";
import { ProductoAlimenticio } from "../desafio_ProductoAlimenticio";

class ProductoCongelado extends ProductoAlimenticio {

  temperaturaRecomendada: number;
  private margen: number;

  constructor(name: string, price: number, fechaCaducidad: string, temperaturaRecomendada: number, margen: number = 5) {
    const fechaCaducidadDate = new Date(fechaCaducidad); // Convertir la cadena de fecha a un objeto Date
    super(name, price, fechaCaducidadDate);
    this.margen = margen; //El margen representa la variación permitida en la temperatura recomendada
    this.temperaturaRecomendada = temperaturaRecomendada;
    // [Tu código: Guarda  el dato temperaturaRecomendada]
    
  }
  estaAlmacenadoCorrectamente(temperaturaActual: number): boolean {
    const temperaturaMinima = this.temperaturaRecomendada - this.margen;
    const temperaturaMaxima = this.temperaturaRecomendada + this.margen;
    
    return temperaturaActual >= temperaturaMinima && temperaturaActual <= temperaturaMaxima;
}

}

// Creación de la instancia
const helado = new ProductoCongelado("Helado de Vainilla", 2.99, "2024-12-31", -18);

// Temperatura actual de almacenamiento
const temperaturaActual = -20; // Supongamos que esta es la temperatura actual

// Verificar si el producto está almacenado correctamente
const estaAlmacenadoCorrectamente = helado.estaAlmacenadoCorrectamente(temperaturaActual);
console.log("¿Está almacenado correctamente?:", estaAlmacenadoCorrectamente ? "Sí" : "No");

// Verificar si el producto está caducado
const esCaducado = helado.checkCaducidad();
console.log("¿El producto está caducado?:", esCaducado ? "Sí" : "No");

// Mostrar detalles del producto
console.log("Nombre del Producto:", helado.name);
console.log("Precio:", helado.getPrice());
console.log("Fecha de Caducidad:", helado.fechaCaducidad.toDateString());
console.log("Temperatura Recomendada:", helado.temperaturaRecomendada, "grados");
