import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
})
export class View3Component implements OnInit {


  constructor(private activatedRoute: ActivatedRoute)
  {

  }
  ngOnInit(): void {
    
    this.activatedRoute.queryParams.subscribe((params)=>{

      //ejemplo de query param: http://localhost:4200/view3?name=josefa&lastname=perez
      console.log('params: ', params);
      

    })

    console.log('snapshot: ', this.activatedRoute.snapshot.queryParams);
    

  }


 }
