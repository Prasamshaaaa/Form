import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
  @Input() label!: string;
  @Input() formControlName!: string;
  @Input() formControl!: FormControl;
  constructor() { }
  ngOnInit(): void { }

}
