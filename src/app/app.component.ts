import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet]
})
export class AppComponent implements OnInit{
    constructor(private router: Router) {}
    ngOnInit(): void {
            this.router.navigateByUrl('/');
    }
}