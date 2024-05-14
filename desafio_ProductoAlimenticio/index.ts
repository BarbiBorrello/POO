/**
 * Como ya tienes la clase Producto, la usaremos como base. 
 * Esta clase tiene propiedades básicas como name y price, y un método getPrice().
 */


  export class Producto {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  name: string;
  price: number;
  getPrice() {
    return this.price;
  }
}


/**La clase ProductoAlimenticio también extenderá la clase Producto.

Esta clase tendrá una propiedad adicional fechaCaducidad 
para almacenar la fecha de caducidad del producto alimenticio.

Incluirá un método checkCaducidad() 
que devolverá true si el producto está caducado o false en caso contrario. */

export class ProductoAlimenticio extends Producto {
  fechaCaducidad: Date;
  constructor(name:string, price:number, fechaCaducidad:Date) {
    super(name, price);
    this.fechaCaducidad =fechaCaducidad;
  }

  checkCaducidad():boolean {
    const hoy = new Date();
    // [Completa la lógica para obtener si el producto está vencido]
    const estaVencido = this.fechaCaducidad<hoy
    if(estaVencido){
      return true
    } else {
      return false
    }
  }
}

// Creación de la instancia
const pan = new ProductoAlimenticio("Pan Integral", 3.50, new Date("2024-05-30"));

const estaVencido = pan.checkCaducidad();
console.log("¿El producto está vencido?:", estaVencido ? "Sí" : "No");

// Mostrar detalles del producto
console.log("Nombre del Producto:", pan.name);
console.log("Precio:", pan.getPrice());

//console.log("Fecha de Caducidad:", pan.fechaCaducidad);

// Mostrar detalles del producto con fecha de caducidad formateada
console.log("Fecha de Caducidad:", `${pan.fechaCaducidad.getFullYear()}-${pan.fechaCaducidad.getMonth() + 1}-${pan.fechaCaducidad.getDate()}`);

// Mostrar detalles del producto con fecha de caducidad formateada
console.log("Fecha de Caducidad:", pan.fechaCaducidad.toLocaleDateString());
