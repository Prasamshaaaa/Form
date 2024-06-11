import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() formControlName!: string;
  @Input() formControl!: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
