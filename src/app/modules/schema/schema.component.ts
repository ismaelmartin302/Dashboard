import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-schema',
  standalone: true,
  imports: [],
  templateUrl: './schema.component.html',
  styleUrl: './schema.component.scss'
})
export class SchemaComponent {
  @Input() app: String = '';
}
