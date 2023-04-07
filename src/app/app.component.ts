import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testAngular';


  constructor(){

    console.log("--------------funciones puras----------------");
    
    console.log(this.pureExample(3,4));
    console.log(this.pureExample(2,5));
    console.log(this.pureExample(4,4));
    console.log(this.pureExample(9,1));
    
    console.log("--------------funciones impuras----------------");

    console.log(this.impureExample(9,1))
    console.log(this.impureExample(9,1))
    console.log(this.impureExample(9,1))
    console.log(this.impureExample(9,1))

  }

  pureExample(a:number, b:number):number{
    return a+b
  }

  impureExample(a:number,b:number):number{

    return a + b + Math.round(10 * Math.random());
  }
}
