import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HolaDAPO } from './dapoComponente/dapo.component';
//import { HolaVatosComponent } from './hola-vatos/hola-vatos.component';
import { HeaderComponent } from './contenido/header.component';
import { FooterComponent } from './contenido/footer.component';
import { LeftComponent } from './contenido/left.component';
import { RightComponent } from './contenido/right.component';
 // import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    //HolaDAPO,
    //HolaVatosComponent
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
