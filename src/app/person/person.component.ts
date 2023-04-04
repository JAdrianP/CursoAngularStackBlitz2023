import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent {

  //el entrecomillado se usa en el html y el name a secas en el ts
  @Input("nameTest") name:string = ''
  @Input() lastName:string = ''
  @Input() age:number = 0

  //ojo con los imports del output, input y los eventos(de angular core todos)
  @Output() print = new EventEmitter()

  constructor() {
  }

  sendPrint(event:any){

    this.print.emit("hola");

  }
}
