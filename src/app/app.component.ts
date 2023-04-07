import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testAngular';

  //esta es la manera de enlazar variables del HTML al TS, las variables HTML son las que llevan # delante
  //si el static estuviera a true, en caso de estar la variable my text enlazada a un *ngIf y el el elemento 
  //de la variable no estueviera renderizado, daria error, el valor por defecto de static es true
  @ViewChild('myText', {static: false}) myText!: ElementRef;
  //@ViewChild('myText') myText!: ElementRef;

  send(data:any){

    console.log(this.myText.nativeElement.value);
    
  }
}
