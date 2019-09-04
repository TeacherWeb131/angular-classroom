import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElevesComponent } from './eleves/eleves.component';
import { EleveComponent } from './eleve/eleve.component';

@NgModule({
  declarations: [
    AppComponent,
    ElevesComponent,
    EleveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
