
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
    this.route.queryParams.subscribe(params => {
      if (this.route.getCurrentNavigation()?.extras.state) {
        this.usuario = this.route.getCurrentNavigation().extras.state['usuario'];
      }
    });
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = null;
    // Agrega animación de "shake" a los campos
    document.getElementById('nombreInput')?.classList.add('input-animation');
    document.getElementById('apellidoInput')?.classList.add('input-animation');
  
    setTimeout(() => {
      document.getElementById('nombreInput')?.classList.remove('input-animation');
      document.getElementById('apellidoInput')?.classList.remove('input-animation');
    }, 1000);
  }

  mostrarInformacion() {
    alert(`Nombre: ${this.nombre}\nApellido: ${this.apellido}`);
  }
}
