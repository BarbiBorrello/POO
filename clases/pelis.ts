class Peli {
  title: string;
  rating: number;

  constructor(title: string, rating: number) {
    this.title = title;
    this.rating = rating;
  }

  getPeli(){
    return this;
  }

  getTitle(){
    return this.title;
  }

  getRating(){
    return this.rating;
  }
}

function main (){
  // instancias
  const peli = new Peli("Una peli", 5);
  const peli2 = new Peli("Otra peli", 1);

  console.log(peli.getPeli());
  console.log(peli.getTitle());
  console.log(peli.getRating());
  console.log(peli2.getPeli());
  console.log(peli2.getTitle());
  console.log(peli2.getRating());
}

main();