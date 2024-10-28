
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: Date | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
   
    if (this.route.snapshot.data['usuario']) {
      this.usuario = this.route.snapshot.data['usuario'];
    }
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = null;
  }

  mostrarInformacion() {
    alert(`Nombre: ${this.nombre}\nApellido: ${this.apellido}`);
  }
}
