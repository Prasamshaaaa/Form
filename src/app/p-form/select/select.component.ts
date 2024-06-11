import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() label!: string;  // This denotes that the property will be initialized later
  @Input() formControlName!: string;
  @Input() placeholder!: string;

  @Input() formControl!: FormControl;
  @Input() options!: { Options: string }[];
  constructor() { }

  ngOnInit(): void { }
}
