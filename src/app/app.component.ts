import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchemaComponent } from "./modules/schema/schema.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SchemaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dashboard';
}
