import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  @Input() label!: string;
  @Input() formControlName!: string;
  @Input() placeholder!: string;
  @Input() formControl!: FormControl;
  constructor() { }
  ngOnInit(): void { }
}
