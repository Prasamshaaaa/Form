import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() label!: string;
  @Input() formControlName!: string;
  @Input() formControl!: FormControl;
  @Input() options!: { Options: string }[];

  @Input() placeholder!: string;

  constructor() { }

  ngOnInit(): void { }
}
