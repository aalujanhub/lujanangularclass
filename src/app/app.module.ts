import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { DirectivaColorDirective } from './directiva-color.directive';
import {HttpClientModule} from '@angular/common/http';
import {ServiciomensajeService} from './serviciomensaje.service';

@NgModule({
  declarations: [
    AppComponent,
    MensajesComponent,
    DirectivaColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[HttpClientModule],
  providers: [ServiciomensajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
