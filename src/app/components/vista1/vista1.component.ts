import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-vista1',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './vista1.component.html',
  styleUrl: './vista1.component.css'
})
export class Vista1Component {
  title = 'Vista 1';
}
