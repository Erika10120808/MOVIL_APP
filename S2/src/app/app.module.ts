import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';

// Angular Material Modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';      // Asegúrate de que el componente raíz esté importado
import { AppRoutingModule } from './app-routing.module';  // Importa el módulo de enrutamiento principal

@NgModule({
  declarations: [
    AppComponent  // Declara el componente raíz
  ],
  imports: [
    BrowserModule,              
    BrowserAnimationsModule,     
    MatDatepickerModule,         
    MatNativeDateModule,         
    MatInputModule,              
    IonicModule.forRoot(),        // Necesario para las configuraciones de Ionic
    AppRoutingModule             // Importa el enrutamiento principal para que funcione
  ],
  providers: [
    MatDatepickerModule          
  ],
  bootstrap: [AppComponent]      // Arranca con AppComponent como el componente principal
})
export class AppModule {}