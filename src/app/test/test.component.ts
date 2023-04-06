import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css']
})
export class TestComponent implements OnInit {

  @Input()
  get message(){
    console.log("dentro del get");
    
    return this._message;}
  set message(value:string){
    console.log('dentro del set');
    this._message = value + " yeiii"}

  private _message!:string;

  constructor() {
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
