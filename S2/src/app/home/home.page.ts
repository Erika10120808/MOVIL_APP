import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  usuario: string = '';
  password: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: Date | null = null;

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = null;
    this.password = ''; 
  }

  mostrarInformacion() {
    alert(`Nombre: ${this.nombre}\nApellido: ${this.apellido}`);
  }
}

