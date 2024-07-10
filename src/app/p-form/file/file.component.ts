import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {

  @Input() label!: string;
  @Input() formControlName!: string;
  @Input() formControl!: FormControl;

  @Input() placeholder!: string;

  SelectedFiles: File[] = [];

  constructor() { }

  ngOnInit(): void { }

  OnFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      for (let i = 0; i < inputElement.files.length; i++) {
        this.SelectedFiles.push(inputElement.files[i]);

      }
    }
  }

}
