import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

//parece que esto es una forma minificada de hacer el app-routing.module
const routes: Routes = [
  {
    //con esto le estamos diciendo que la ruta principal de este modulo va a ser
    path: '',
    component: DashboardComponent,
    children: [
      {
        path:'view1',
        component: View1Component
      },
      {
        path:'view2',
        component: View2Component
      }

    ]
  }
 
]

@NgModule({
  imports: [CommonModule,

    //esto hay que hacerlo como parte de la minificacion del app-routing.module
    RouterModule.forChild(routes),],
  declarations: [DashboardComponent,
    View1Component,
    View2Component],
  exports: [DashboardComponent],
})
export class DashboardModule { }
