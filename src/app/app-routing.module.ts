import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { View1Component } from './dashboard/view1/view1.component';
import { View2Component } from './dashboard/view2/view2.component';
import { ErrorComponent } from './error/error.component';

//asi es como se hace la navegacion po modulos, cargando los modulos
const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then((modulo)=>modulo.LoginModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((modulo)=>modulo.DashboardModule)
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'error'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
