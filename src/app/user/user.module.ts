import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp1/comp3/comp3.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UserComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component],

    //al exportar el comp1 permitimos que lo use el html del app component
  exports: [UserComponent,
  Comp1Component],
})
export class UserModule { }
