import { Component } from '@angular/core';
import { IPerson } from './person/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testAngular';
  perro = 'perrito';

  public person: IPerson = {
    name: '',
    lastName: '',
    age: 0
  }

  public student: string ='example juan.'

  public a = 0;
  public b = 0;
  public c = this.a + this.b;



  getPrint(event:IPerson, parent?:string){
    this.person = event;
    console.log(event);
    
  }

  public getLastName(event:string):void
  {
    console.log(event);
  }

  public printName(input:HTMLInputElement):void{

    console.log(input.value);
    

  }
}
