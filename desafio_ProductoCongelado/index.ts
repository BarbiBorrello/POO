import { Producto } from "../desafio_ProductoAlimenticio";
import { ProductoAlimenticio } from "../desafio_ProductoAlimenticio";

class ProductoCongelado extends ProductoAlimenticio {

  temperaturaRecomendada: number;
  private margen: number;
  
  constructor(name: string, price: number, fechaCaducidad: string, temperaturaRecomendada: number, margen: number = 5) {
    super(name, price, fechaCaducidad);
    this.margen = margen;
    // [Tu código: Guarda  el dato temperaturaRecomendada]
    
  }
  estaAlmacenadoCorrectamente(temperaturaActual: number): boolean {
    
    // [Calcula si el producto está bien conservado contemplando 
    // el temperaturaRecomendada y el margen]
  }
}
