import { Component } from '@angular/core';
import { SchemaComponent } from "../../modules/schema/schema.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [SchemaComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
