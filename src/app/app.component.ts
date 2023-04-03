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
    const auxMap = [1, 2, 3, 4, 5].map(num => num * 2);
    console.log("auxMap: ", auxMap);

    //a diferencia del map el foreach no mete en la variable lo que hayamos hecho, solo lo recorre 
    const auxForEach = [1, 2, 3, 4, 5].forEach(num => num * 2);
    console.log("auxForEach", auxForEach);

    //si encuentra lo que buscamos lo devuelve y si no devuelve undefined
    const auxFind = [1, 2, 3, 4, 5].find(num => num === 3)
    console.log("auxFind: ", auxFind);

    //devuelve el indice de lo que buscamos si no lo encuentra devuelve -1
    const auxFindIndex = [1, 2, 3, 4, 5].findIndex(num => num === 7)
    console.log("auxFindIndex: ", auxFindIndex);

    //lo mismo que antes pero sin arrow, tambie nsirve para buscar en cadenas
    const auxIndexOf = [1, 2, 3, 4, 5].indexOf(3)
    console.log(auxIndexOf);
    //devuelve la posicion de inicio de la subcadena que buscamos y -1 si no esta
    const auxIndexOf2 = "hola mundo".indexOf("mundi")
    console.log(auxIndexOf2)

    //crea y devuelve un array con los elementos del array que cumplen la condicion de la arrow, si no encuentra nada devuelve el array vacio
    const auxFilter = [1, 2, 3, 4, 5].filter(num => num % 2 !== 0);
    console.log("auxFilter: ", auxFilter);

    //convierte un array a cadena separando los elementos con la cadena del parametro, para no separar pasamos cadena vacia
    const auxJoin = [1, 2, 3, 4, 5].join('-')
    console.log("auxJoin: ", auxJoin);

    //el inverso del join
    const auxSplit = "1-2-3-4-5".split('-');
    console.log("auxSplit: ", auxSplit);

    //operador splice: este ejemplo me devuelve 3 elementos desde la posicion 0 y los mete en auxSplice, a su vez modifica el array original eliminando
    //los elementos que ahora estan en auxSplice
    const a = ['a', 'b', 'c', 'd', 'e'];
    const auxSplice = a.splice(0, 3);
    console.log("auxSplice ", auxSplice, "a: ", a);

    //operador reduce

    //esta funcion se llama por cada elemento del array, el primer argumento es una funcion cuyos argumentos son el valor "previo" que seria el resultado de 
    //la ultima iteracion, el valor actual, que es el valor del elemento sobre el que estamos iterando y el indice del elemento sobre el que estamos iterando
    /*const auxReduce = [1, 2, 3, 4, 5].reduce((prev, value, index) => {
      console.log(prev, value, index);
      return prev + value;
    }, 0);*/

    const auxReduce = [1, 2, 3, 4, 5].reduce((prev, value, index) => prev + value)
    console.log("auxReduce: ", auxReduce);

    //OPERADORES JSON

    const auxJSON = {
      "arrayColores": [
        {
          "nombreColor": "rojo",
          "valorHexadec": "#f00"
        },
        {
          "nombreColor": "verde",
          "valorHexadec": "#0f0"
        },
        {
          "nombreColor": "azul",
          "valorHexadec": "#00f"
        },
        {
          "nombreColor": "cyan",
          "valorHexadec": "#0ff"
        },
        {
          "nombreColor": "magenta",
          "valorHexadec": "#f0f"
        },
        {
          "nombreColor": "amarillo",
          "valorHexadec": "#ff0"
        },
        {
          "nombreColor": "negro",
          "valorHexadec": "#000"
        }
      ],
      "array coches": [

        {
          "modelo": "mustang",
          "anyo": "1969"
        },
        {
          "modelo": "mustang",
          "anyo": "1969"
        },
        {
          "modelo": "mustang",
          "anyo": "1969"
        }]
    }

    //entries, keys y values
    //esto te pasa un JSON a array de arrays
    const auxEntries = Object.entries(auxJSON);
    console.log('auxEntries: ', auxEntries);

    const auxKeys = Object.keys(auxJSON)
    console.log('auxKeys: ', auxKeys);

    const auxValues = Object.values(auxJSON)
    console.log('auxValues: ', auxValues);

    //CONST Y LET

    //cada let index pertenece solo a su contexto, el for en este caso, por eso no chocan

    /*for (let index = 0; index < 6; index++) {
     console.log('index', index);
    }
    for (let index = 0; index < 6; index++) {
     console.log('index', index);
    }
    for (let index = 0; index < 6; index++) {
     console.log('index', index);
    }*/

    const aux = 1;
    //si ahora intentaramos cambiar el valor de aux daria error
    console.log('a: ' + a);

    //SPREAD, REST

    //los tres puntos son spread, basicamente pega el array b delante del contenido de c tambie nsirve con JSON
    const b = [1, 2, 3, 4, 5, 6];
    const c = [...b, 7, 8, 9, 10]
    console.log('c: ', c);

    //uso de rest
    this.getRest(45, 89, 'buenas', "yeiii");

    const person = {
      id: 1,
      name: 'juan',
      country: {
        idCountry: 1,
        cod: 'LP'
      }
    }

    //uso de desestructuracion para sacar un objeto concreto de un JSON
    const { country } = person;
    console.log('country', country);

    //otra opcion seria hacerlo naturalmente sin desestructuracion
    const country2 = person.country;
    console.log('country2', country2);




    //------------------------Ejemplo de aplicacion de operadores--------------------------

    const data = {
      alumno1: {
        id: 1,
        name: 'luisa',
        edad: 24
      },
      alumno2: {
        id: 2,
        name: 'ramiro',
        edad: 10
      },
      alumno3: {
        id: 3,
        name: 'pepe',
        edad: 27
      }
    }

    //queremos convertir a array y sumar las edades

    const arrayData = Object.values(data);

    let acum = 0;
    arrayData.forEach(element => {

      acum += element.edad;

    });

    const acum2 = Object.values(data).reduce((prev, value, index) => value.edad + prev, 0)

    console.log('la edad es: ', acum);
    console.log('acum2: ', acum2);

    //------------------------------------------------------------

    //queremos convertir a array y devolver un array con los id de las personas mayores a 10 anyos

    const arrayDatos2 = Object.values(data);
    const mayoresDe10 = arrayDatos2.filter(pito => pito.edad > 10).map(pito => pito.id);

    console.log('los mayores de 10 son: ' , mayoresDe10);
    

    //---------------------------------------------------
    

  }


  //el parametro de longitud variable de java literalmente
  getRest(...params: any[]) {
    console.log('REST: ', params);


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
  mult = (num: number) => num * 2;
  /* private mult(num:number){
     return num*2;
   }*/
}


