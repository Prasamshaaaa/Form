import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label!: string;
@Output() Clicked: EventEmitter<void> = new EventEmitter<void>();  //signal that the button has been clicked, without passing any additional data along with it

OnClick() {
  console.log('Button clicked!');
  this.Clicked.emit();
}

}
