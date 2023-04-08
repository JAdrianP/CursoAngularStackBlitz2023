import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
})
export class View1Component implements OnInit { 

constructor(private activatedRoute: ActivatedRoute){

  
}

ngOnInit(): void {

  //esto al ser un observable va a escuchar dinamicamente
  this.activatedRoute.params.subscribe(params => {
    console.log("parametros: " ,params);
    
  })
  //esto va a escuchar solo una vez al crear el componente
  console.log('snapshot: ', this.activatedRoute.snapshot.params);
  
}

}
