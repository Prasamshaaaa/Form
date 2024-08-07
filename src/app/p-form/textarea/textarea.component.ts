import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {

  @Input() label!: string;  //!= This denotes that the property will be initialized later
  @Input() formControlName!: string;
  @Input() placeholder!: string;
  @Input() formControl!: FormControl;

  constructor() { }

  ngOnInit(): void { }

}
