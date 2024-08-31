import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchemaComponent } from "./modules/schema/schema.component";
import { TopMenuComponent } from "./layout/topmenu/topmenu.component";
import { MenuComponent } from "./layout/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SchemaComponent, TopMenuComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: String = 'Dashboard';
  apps: Array<any> = ['house', 'house-fill'];
}
