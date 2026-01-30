import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-vista1',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './vista1.component.html',
  styleUrl: './vista1.component.css',
})
export class Vista1Component {
  title = 'Vista 1';
  image = false;

  cargarImagen() {
    this.image = true;
  }
}
