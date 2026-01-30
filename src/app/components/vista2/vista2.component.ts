import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
@Component({
  selector: 'app-vista2',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './vista2.component.html',
  styleUrl: './vista2.component.css',
})
export class Vista2Component {
  title = 'Vista 2';
  nombre = '';
  email = '';

  constructor(private emailService: EmailService) {}

  enviarCorreo() {
    if (!this.nombre || !this.email) {
      alert('Completa ambos campos');
      return;
    }

    this.emailService.sendEmail(this.nombre, this.email).subscribe({
      next: () => alert('Email enviado correctamente'),
      error: (error) => alert('Error: ' + error.message)
    });
  }
}
