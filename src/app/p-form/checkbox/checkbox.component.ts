import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() label!: string;
  @Input() formControlName!: string;
  @Input() formControl!: FormControl;
  @Input() placeholder!: string;
  @Input() options!: { Options: string }[];

  OnSubjectSelected(event: any, option: string) {
    if (event) {
      /*       const selectedOption = this.options.find(opt => opt.Options === option);
            console.log(selectedOption);
            const existingValue = this.formControl.get(`${this.formControl}`)?.value;
            const newValue = `${existingValue}, ${option}`;
            this.formControl.setValue(newValue); */
    } else {

    }

  }

}
