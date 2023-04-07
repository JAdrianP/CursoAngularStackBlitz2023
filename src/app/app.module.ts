import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeTestPipe } from './pipe-test.pipe';
import { ExpoPipe } from './expo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeTestPipe,
    ExpoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
