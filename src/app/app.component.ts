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


