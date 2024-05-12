class Producto {
  price : number
  name :string
  constructor(price:number, name :string){
    this.price=price;
    this.name=name;
  }

  getprice(){
    return this.price;
  }
}

class ProductoElectronico extends Producto {

   constructor (price:number,name:string,useBatteries:boolean){ // se agrega 1 parametro : useBatteries
    super(price,name); // se llama al CONSTRUCTOR PADRE
    this.useBatteries = useBatteries // se agrega si USA O NO USA baterias

  }
  useBatteries: boolean =false;

  setBatteries(usa: boolean) {
    this.useBatteries = usa;
  }
}

// class ProductosSamsung extends ProductoElectronico {}

function main () {
  const celular = new ProductoElectronico(1000,"Samsung Galaxy",true);
  // celular.setBatteries(true); => antes de EXTENDER la clase
  console.log(celular);
  


  
}

main();