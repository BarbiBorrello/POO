class Album {
  title : string
  songs : string[]

  constructor(title:string,songs:string[]) {
    this.title=title
    this.songs=songs
    
  }
}

class Banda {
  members : string[]
  albums : any[]

  constructor(members:string[],albums: Album[]) {
    this.members = members
    this.albums = albums
    
  }
}

function main() {
  console.log ("soy el main");
  //const unaBanda = new Banda(["barbi"],[]);
  //console.log(unaBanda.albums);
  //console.log(unaBanda.members);

  //-------------------------//
  const unAlbum = new Album("BTS", ["Despacito","Que linda es la vida"]);
  console.log (unAlbum);
  console.log (unAlbum.title);
  console.log (unAlbum.songs);

   //-------------------------//
  const unaBanda = new Banda (["la banda de Barbi"],[unAlbum,unAlbum,unAlbum] );
  console.log(unaBanda);
  console.log(unaBanda.albums);
  console.log(unaBanda.members);

     //-------------------------//
     const unAlbum2 = {
      title :"el album de Pablo",
      songs : ["una cancion", "otra cancion"]
     }

     const unaBanda2 = new Banda (["la banda de Barbi"],[unAlbum2,unAlbum2,unAlbum2] );

     console.log ( unaBanda2);



  
  
}

main();