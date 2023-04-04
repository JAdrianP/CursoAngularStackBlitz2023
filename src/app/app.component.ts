import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testAngular';
  public name:string ="perico";
  public lastName:string ="rodriguez";
  enablePerson: boolean = true;
  level:number = 1;

}
