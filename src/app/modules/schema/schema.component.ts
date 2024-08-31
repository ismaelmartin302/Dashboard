import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-schema',
  standalone: true,
  imports: [],
  template: `
  <div>
    <i class="bi bi-{{app}}"></i>
  </div>
  `,
  styles: `
  div {
    color: white;
    background-color: rgba($color: #7bc6dd, $alpha: 0.25);
    padding: .8em;
    height: 4em;
    width: 4em;
    margin: auto;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
        font-size: 2em;
    }
  }
  `
})
export class SchemaComponent {
  @Input() app: String = '';
}
