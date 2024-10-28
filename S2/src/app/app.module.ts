import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    // Declara los componentes, directivas y pipes del módulo aquí
  ],
  imports: [
    BrowserModule,              // Asegura que el módulo de navegador esté importado
    BrowserAnimationsModule,     // Necesario para las animaciones de Angular Material
    MatDatepickerModule,         // Módulo de selector de fechas de Angular Material
    MatNativeDateModule,         // Proveedor de fechas nativas
    MatInputModule,              // Módulo de input de Angular Material
  ],
  providers: [
    MatDatepickerModule,         // Asegura que el Datepicker esté disponible en todo el módulo
  ],
  bootstrap: [
    // Componente raíz que se debe cargar en el arranque
  ],
})
export class AppModule {}
