import { Router, NavigationExtras } from '@angular/router';

constructor(private router: Router) {}

onSubmit() {
  if (this.usuario && this.password) {
    const navigationExtras: NavigationExtras = {
      state: { usuario: this.usuario }
    };
    this.router.navigate(['home'], navigationExtras);
  } else {
    alert('Por favor, verifica los datos ingresados.');
  }
}
