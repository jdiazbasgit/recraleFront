import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  usuario: string = '';
  clave: string = '';

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Usuario:', this.usuario);
    console.log('Clave:', this.clave);
  }
}