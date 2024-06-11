import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  @Input('form-element')
  formElement!: string;

  @Input('element-type')
  elementType!: string;

}
