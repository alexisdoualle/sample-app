import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomHeaderModule, CustomDivModule } from 'custom-component-library/dist'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // CustomHeaderModule,
    CustomDivModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
