import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() label!: string;  //!= This denotes that the property will be initialized later
  @Input() placeholder!: string;
  @Input() formControlName!: string;
  @Input() formControl!: FormControl;
  @Input() getErrorMessage!: () => string | null;
  constructor() { }

  ngOnInit(): void { }

}
