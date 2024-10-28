import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // otros componentes
  ],
  imports: [
    BrowserModule,
    // otros módulos necesarios
  ],
  bootstrap: [AppComponent]  // Asegúrate de incluir el componente de arranque aquí
})
export class AppModule { }
