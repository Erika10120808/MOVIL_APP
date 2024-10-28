import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

    usuario!: string;
    password!: string;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.usuario && this.password) {
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: this.usuario
        }
      };
      this.router.navigate(['home'], navigationExtras);
    } else {
      alert('Por favor, verifica los datos ingresados.');
    }
  }

  limpiarCampos() {
    this.usuario = '';
    this.password = '';
  }
}
