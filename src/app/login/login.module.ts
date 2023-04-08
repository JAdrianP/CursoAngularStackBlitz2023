import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    //con esto le estamos diciendo que la ruta principal de este modulo va a ser
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  imports: [CommonModule,
  RouterModule.forChild(routes)],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule { }
