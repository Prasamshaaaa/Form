import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {

  @Input() label!: string;
  @Input() formControlName!: string;

  constructor() {}

  ngOnInit(): void {}


}
