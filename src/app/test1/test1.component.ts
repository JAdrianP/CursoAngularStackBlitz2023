import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: 'test1.component.html',
  styleUrls: ['test1.component.css']
})

//ojo con el import de oninit y la implementacion del metodo
export class Test1Component implements OnInit, OnChanges, DoCheck {

  @Input() name!: string;
  @Input() lastName: string = 'perez';

  public middleName:string ="";

  constructor() {

  }

  //cunado el componente tiene minimo un input se entra aqui primero
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges", changes, changes['name'].isFirstChange());

    if (changes['name'].isFirstChange()) {
      console.log("carga los datos iniciales");
    }

  }

  //eso suele llamar al back end para pillar los datos
  //se ejecuta cuando esto se renderiza en el DOM, el 
  //constructor va antes, aqui solo se entrauna vez
  ngOnInit(): void {
    console.log("yrrrrrrrrrrr");

  }

//esto detecta practicamente todo
  ngDoCheck(): void {
    console.log("docheck");
    
  }

}
