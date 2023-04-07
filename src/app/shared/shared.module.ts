import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedComponent } from './shared.component';
import { AlertComponent } from './alert/alert.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SharedComponent,
  AlertComponent,
SidenavComponent],
  exports: [SharedComponent,
  AlertComponent,
  SidenavComponent
],
})
export class SharedModule {}
