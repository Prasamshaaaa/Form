import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() label!: string;
  @Input() formControlName!: string;
  @Input() options!: { value: string, label: string }[];

  constructor() {}

  ngOnInit(): void {}
}
