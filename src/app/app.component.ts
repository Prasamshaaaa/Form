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
      "Element": "MyForm",
      "ElementType": "Heading",
      "DisplayOrder": 1,
    },

    {
      "Element": "FirstName",
      "ElementType": "Text",
      "DisplayOrder": 2,
      "Required": true,

    },
    {
      "Element": "LastName",
      "ElementType": "Text",
      "DisplayOrder": 4,
      "Required": true,

    },
    {
      "Element": "Email",
      "ElementType": "Email",
      "DisplayOrder": 5,
      "Required": true,

    },
    {
      "Element": "MiddleName",
      "ElementType": "Text",
      "DisplayOrder": 3,
      "Required": true,

    },
    {
      "Element": "PhoneNumber",
      "ElementType": "Text",
      "DisplayOrder": 6,
      "Required": true,
      "Pattern": '^[0-9]{10}$',

    },
    {
      "Element": "Address",
      "ElementType": "Text",
      "DisplayOrder": 7,
      "Required": true,

    },
    {
      "Element": "Submit",
      "ElementType": "Submit",
      "DisplayOrder": 16,

    },
    {
      "Element": "Username",
      "ElementType": "Text",
      "DisplayOrder": 8,
      "Required": true,

    },
    {
      "Element": "Password",
      "ElementType": "Password",
      "DisplayOrder": 9,
      "Required": true,
      "MinLength": 8,
      "MaxLength": 20,

    },
    {
      "Element": "Faculty",
      "ElementType": "Select",
      "DisplayOrder": 10,
      "SelectOptions": [{ Options: "IT" }, { Options: "Engineering" }, { Options: "Management" }],
      "Required": true,

    },
    {
      "Element": "Gender",
      "ElementType": "Radio",
      "DisplayOrder": 11,
      "SelectOptions": [{ Options: "Male" }, { Options: "Female" }, { Options: "Others" }],
      "Required": true,

    },

    {
      "Element": "Subject",
      "ElementType": "Checkbox",
      "DisplayOrder": 12,
      "SelectOptions": [{ Options: "Mathematics" }, { Options: "Science" }, { Options: "English" }],
      "Required": true,

    },

    {
      "Element": "Date",
      "ElementType": "Date",
      "DisplayOrder": 13,
      "Required": true,

    },
    {
      "Element": "Any Suggestions?",
      "ElementType": "Textarea",
      "DisplayOrder": 14,
      // "Required": true,

    },

    {
      "Element": "Upload File",
      "ElementType": "File",
      "DisplayOrder": 15,

    }
  ];
  ngOnInit() {
    this.form.formLayout = ENUM_FormLayouts.Vertical;
    this.form.formElements = this.formElements;
  }
}
