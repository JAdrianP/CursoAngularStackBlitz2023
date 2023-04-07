import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent,
    Comp4Component,
    Comp5Component,
    Comp6Component
   ],
  exports: [HomeComponent],
})
export class HomeModule { }
