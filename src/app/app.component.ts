import { Component } from '@angular/core';
import { IFormElments, IForms } from './_helpers/form-elements';
import { ENUM_FormLayouts } from './_helpers/app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form-project';
  form: IForms = {
    formLayout: ENUM_FormLayouts.Vertical,
    formElements: Array<IFormElments>()
  };
  formElements: Array<IFormElments> = [
    {
      "Element": "FirstName",
      "ElementType": "Text",
      "DisplayOrder": 1
    },
    {
      "Element": "LastName",
      "ElementType": "Text",
      "DisplayOrder": 3
    },
    {
      "Element": "Email",
      "ElementType": "Email",
      "DisplayOrder": 4
    },
    {
      "Element": "MiddleName",
      "ElementType": "Text",
      "DisplayOrder": 2
    },
    {
      "Element": "PhoneNumber",
      "ElementType": "Text",
      "DisplayOrder": 5
    },
    {
      "Element": "Address",
      "ElementType": "Text",
      "DisplayOrder": 6
    },
    {
      "Element": "Submit",
      "ElementType": "Submit",
      "DisplayOrder": 10
    },
    {
      "Element": "Username",
      "ElementType": "Text",
      "DisplayOrder": 7
    },
    {
      "Element": "Password",
      "ElementType": "Password",
      "DisplayOrder": 8
    },
    {
      "Element": "Gender",
      "ElementType": "Select",
      "DisplayOrder": 9,
      "SelectOptions": [{ Options: "Male" }, { Options: "Female" }]
    }
  ];
  ngOnInit() {
    this.form.formLayout = ENUM_FormLayouts.Vertical;
    this.form.formElements = this.formElements;
  }
}
