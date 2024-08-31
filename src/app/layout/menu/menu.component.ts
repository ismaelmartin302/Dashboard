import { Component, Input } from '@angular/core';
import { SchemaComponent } from "../../modules/schema/schema.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [SchemaComponent],
  template: `
    @for (app of appsMenu; track $index) {
    <app-schema [app]="app"></app-schema>
  }
`,
  styles: ``
})
export class MenuComponent {
  @Input() appsMenu: Array<any> = [];
}
