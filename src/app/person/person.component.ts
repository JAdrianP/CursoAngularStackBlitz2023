import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPerson } from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})





export class PersonComponent {

  //el entrecomillado se usa en el html y el name a secas en el ts
  @Input("nameTest") name: string = ''
  @Input() lastName: string = ''
  @Input() age: number = 0

  //ojo con los imports del output, input y los eventos(de angular core todos)
  @Output() print = new EventEmitter<IPerson>()

  constructor() {
  }

  public sendPrint(): void {
    //ahora solo podemos meter en el emit un objeto json que tenga la misma definicion que IPerson
    this.print.emit({
      name: this.name,
      lastName: this.lastName,
      age: this.age
    });

  }
}
