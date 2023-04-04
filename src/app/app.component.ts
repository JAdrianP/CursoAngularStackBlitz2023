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


  getPrint(event:IPerson, parent?:string){
    this.person = event;
    console.log(event);
    
  }
}
