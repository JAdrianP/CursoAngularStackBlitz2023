import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'testAngular';


  //esto se ejecuta en cuanto el componente se renderiza
  constructor() {

    console.log("yeeeee");

    //esto itera el array ejecutando la funcion del parametro del map en cada elemento
    const auxMap = [1,2,3,4,5].map(num => num * 2);
    console.log("auxMap: ", auxMap);

    //a diferencia del map el foreach no mete en la variable lo que hayamos hecho, solo lo recorre 
    const auxForEach = [1,2,3,4,5].forEach(num => num * 2);
    console.log("auxForEach", auxForEach);

    //si encuentra lo que buscamos lo devuelve y si no devuelve undefined
    const auxFind = [1,2,3,4,5].find(num => num === 3)
    console.log("auxFind: ", auxFind);

    //devuelve el indice de lo que buscamos si no lo encuentra devuelve -1
    const auxFindIndex = [1,2,3,4,5].findIndex(num => num === 7)
    console.log("auxFindIndex: ", auxFindIndex);

    //lo mismo que antes pero sin arrow, tambie nsirve para buscar en cadenas
    const auxIndexOf = [1,2,3,4,5].indexOf(3)
    console.log(auxIndexOf);
    //devuelve la posicion de inicio de la subcadena que buscamos y -1 si no esta
    const auxIndexOf2 = "hola mundo".indexOf("mundi")
    console.log(auxIndexOf2)

    //crea y devuelve un array con los elementos del array que cumplen la condicion de la arrow, si no encuentra nada devuelve el array vacio
    const auxFilter = [1,2,3,4,5].filter(num => num % 2 !== 0);
     console.log("auxFilter: ", auxFilter);

     //convierte un array a cadena separando los elementos con la cadena del parametro, para no separar pasamos cadena vacia
     const auxJoin =[1,2,3,4,5].join('-')
     console.log("auxJoin: ",auxJoin);
     
     //el inverso del join
     const auxSplit = "1-2-3-4-5".split('-');
     console.log("auxSplit: ", auxSplit);
     
     
    
  }

  //ejemplo de funcion en typescript
  //las funciones publicas se pueden llamar desde el html, lo mismo para las variables
  public getName(name: string): string {

    return "hi" + name;
  }

  //ejemplo de funcion flecha
  getName2 = (name: string) => { return "hi" + name; }
  //esto seria lo mismo para abreviar
  //getName2 = (name: string)=>"hi" + name;
  //otro formato en el que se obvian los parentesis y el tipo del argumento 
  //pero esto solo funciona si en fichero tsconfig.json ponemos el strict a false
  mult = (num:number) => num * 2;
  /* private mult(num:number){
     return num*2;
   }*/

}


