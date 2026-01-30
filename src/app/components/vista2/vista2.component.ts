import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-vista2',
  imports: [FormsModule, NgIf],
  standalone: true,
  templateUrl: './vista2.component.html',
  styleUrl: './vista2.component.css',
})
export class Vista2Component {
  title = 'Vista 2';
  nombre = '';
  email = '';

  nombreInvalido = false;
  emailInvalido = false;

  constructor(private emailService: EmailService) {}

  validarNombre() {
    this.nombreInvalido = this.nombre.length < 3 && this.nombre.length > 0;
  }

  validarEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailInvalido = !emailRegex.test(this.email) && this.email.length > 0;
  }

  get formularioValido() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return this.nombre.length >= 3 && emailRegex.test(this.email);
  }

  enviarCorreo() {
    if (!this.formularioValido) return;

    this.emailService.sendEmail(this.nombre, this.email).subscribe({
      next: () => alert('Email enviado correctamente'),
      error: (error) => alert('Error: ' + error.message)
    });
  }
}
