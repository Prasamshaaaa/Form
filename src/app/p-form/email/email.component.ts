import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() formControlName!: string;
  @Input() formControl!: FormControl;

  constructor() {}

  ngOnInit(): void {}

}
