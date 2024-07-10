import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef, ChangeDetectorRef, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { TextComponent } from './text/text.component';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
import { ButtonComponent } from '../button/button.component';
import { IFormElments, IForms } from '../_helpers/form-elements';
import { ENUM_FormLayouts } from '../_helpers/app.constants';
import { ErrorComponent } from './error/error.component';
import { SelectComponent } from './select/select.component';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DateComponent } from './date/date.component';
import { TextareaComponent } from './textarea/textarea.component';
import { FileComponent } from './file/file.component';
import { HeadingComponent } from './heading/heading.component';
import { NumberComponent } from './number/number.component';


@Component({
  selector: 'app-p-form',
  templateUrl: './p-form.component.html',
  styleUrls: ['./p-form.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class PFormComponent implements OnInit {
  formGroup!: FormGroup;
  @Input('create-form')
  form: IForms = {
    formLayout: ENUM_FormLayouts.Vertical,
    formElements: Array<IFormElments>()
  };

  @ViewChild("forms", { read: ViewContainerRef })
  formContainer: any;
  textComponentRef!: ComponentRef<TextComponent>;
  emailComponentRef!: ComponentRef<EmailComponent>;
  passwordComponentRef!: ComponentRef<PasswordComponent>;
  buttonComponentRef!: ComponentRef<ButtonComponent>;
  errorComponentRef!: ComponentRef<ErrorComponent>;
  SelectComponentRef!: ComponentRef<SelectComponent>;
  RadioComponentRef!: ComponentRef<RadioComponent>;
  CheckboxComponentRef!: ComponentRef<CheckboxComponent>;
  DateComponentRef!: ComponentRef<DateComponent>;
  TextareaComponentRef!: ComponentRef<DateComponent>;
  FileComponentRef!: ComponentRef<FileComponent>;
  HeadingComponentRef!: ComponentRef<HeadingComponent>;
  NumberComponentRef!: ComponentRef<NumberComponent>;



  constructor(private fb: FormBuilder, private _resolver: ComponentFactoryResolver, private _cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({}); // Initialize form group

    this.form.formElements.forEach(f => {
      const validators = this.getValidators(f);
      this.formGroup.addControl(f.Element.toLowerCase(), this.fb.control('', validators)); // Adding form controls dynamically
    });
  }

  ngAfterViewInit() {
    this.CreateComponent();
    this._cdRef.detectChanges();
  }
  OnSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    } else {
      console.log('Form is invalid. Please check for validation errors.');
    }
  }

  CreateComponent() {
    if (this.form && this.form.formElements && this.form.formElements.length) {
      //sort form elements before creting/rendering them in the UI.
      this.form.formElements.sort((a, b) => a.DisplayOrder - b.DisplayOrder);
      this.form.formElements.forEach(f => {
        switch (f.ElementType) {
          case 'Text': {
            const factory: ComponentFactory<TextComponent> = this._resolver.resolveComponentFactory(TextComponent);
            this.textComponentRef = this.formContainer.createComponent(factory);
            this.textComponentRef.instance.label = f.Element;
            this.textComponentRef.instance.placeholder = f.Element;
            this.textComponentRef.instance.formControl = this.formGroup.get(f.Element.toLowerCase()) as FormControl; // Pass form control instance

            break;
          }
          case 'Number': {
            const factory: ComponentFactory<NumberComponent> = this._resolver.resolveComponentFactory(NumberComponent);
            this.NumberComponentRef = this.formContainer.createComponent(factory);
            this.NumberComponentRef.instance.label = f.Element;
            // this.NumberComponentRef.instance.placeholder = f.Element;
            this.NumberComponentRef.instance.formControl = this.formGroup.get(f.Element.toLowerCase()) as FormControl; // Pass form control instance

            break;
          }
          case 'Email': {
            const factory: ComponentFactory<EmailComponent> = this._resolver.resolveComponentFactory(EmailComponent);
            this.emailComponentRef = this.formContainer.createComponent(factory);
            this.emailComponentRef.instance.label = f.Element;
            this.emailComponentRef.instance.placeholder = f.Element;
            this.emailComponentRef.instance.formControl = this.formGroup.get(f.Element.toLowerCase()) as FormControl; // Pass form control instance

            break;
          }
          case 'Password': {
            const factory: ComponentFactory<PasswordComponent> = this._resolver.resolveComponentFactory(PasswordComponent);
            this.passwordComponentRef = this.formContainer.createComponent(factory);
            this.passwordComponentRef.instance.label = f.Element;
            this.passwordComponentRef.instance.placeholder = f.Element;
            this.passwordComponentRef.instance.formControl = this.formGroup.get(f.Element.toLowerCase()) as FormControl; // Pass form control instance

            break;
          }

          case 'Select': {
            const factory: ComponentFactory<SelectComponent> = this._resolver.resolveComponentFactory(SelectComponent);
            this.SelectComponentRef = this.formContainer.createComponent(factory);
            this.SelectComponentRef.instance.label = f.Element;
            this.SelectComponentRef.instance.placeholder = f.Element;
            this.SelectComponentRef.instance.formControl = this.formGroup.get(f.Element.toLowerCase()) as FormControl; // Pass form control instance
            this.SelectComponentRef.instance.options = f.SelectOptions ?? []; //......Undefined xa vane empty array use gareko.......
            break;
          }

          case 'Radio': {
            const factory: ComponentFactory<RadioComponent> = this._resolver.resolveComponentFactory(RadioComponent);
            this.RadioComponentRef = this.formContainer.createComponent(factory);
            this.RadioComponentRef.instance.label = f.Element;
            this.RadioComponentRef.instance.placeholder = f.Element;
            this.RadioComponentRef.instance.formControl = this.formGroup.get(f.Element.toLowerCase()) as FormControl; // Pass form control instance
            this.RadioComponentRef.instance.options = f.SelectOptions ?? []; //......Undefined xa vane empty array use gareko.......
            break;
          }

          case 'Checkbox': {
            const factory: ComponentFactory<CheckboxComponent> = this._resolver.resolveComponentFactory(CheckboxComponent);
            this.CheckboxComponentRef = this.formContainer.createComponent(factory);
            this.CheckboxComponentRef.instance.label = f.Element;
            this.CheckboxComponentRef.instance.placeholder = f.Element;
            this.CheckboxComponentRef.instance.formControl = this.formGroup.get(f.Element.toLowerCase()) as FormControl; // Pass form control instance
            this.CheckboxComponentRef.instance.options = f.SelectOptions ?? []; //......Undefined xa vane empty array use gareko.......
            break;
          }

          case 'Date': {
            const factory: ComponentFactory<DateComponent> = this._resolver.resolveComponentFactory(DateComponent);
            this.DateComponentRef = this.formContainer.createComponent(factory);
            this.DateComponentRef.instance.label = f.Element;
            this.DateComponentRef.instance.placeholder = f.Element;
            this.DateComponentRef.instance.formControl = this.formGroup.get(f.Element.toLowerCase()) as FormControl; // Pass form control instance

            break;
          }

          case 'Textarea': {
            const factory: ComponentFactory<TextareaComponent> = this._resolver.resolveComponentFactory(TextareaComponent);
            this.TextareaComponentRef = this.formContainer.createComponent(factory);
            this.TextareaComponentRef.instance.label = f.Element;
            this.TextareaComponentRef.instance.placeholder = f.Element;
            this.TextareaComponentRef.instance.formControl = this.formGroup.get(f.Element.toLowerCase()) as FormControl; // Pass form control instance
            break;
          }

          case 'File': {
            const factory: ComponentFactory<FileComponent> = this._resolver.resolveComponentFactory(FileComponent);
            this.FileComponentRef = this.formContainer.createComponent(factory);
            this.FileComponentRef.instance.label = f.Element;
            this.FileComponentRef.instance.placeholder = f.Element;
            this.FileComponentRef.instance.formControl = this.formGroup.get(f.Element.toLowerCase()) as FormControl; // Pass form control instance
            break;
          }


          case 'Heading': {
            const factory: ComponentFactory<HeadingComponent> = this._resolver.resolveComponentFactory(HeadingComponent);
            this.HeadingComponentRef = this.formContainer.createComponent(factory);
            this.HeadingComponentRef.instance.label = f.Element;
            // this.HeadingComponentRef.instance.placeholder = f.Element;
            // this.HeadingComponentRef.instance.formControl = this.formGroup.get(f.Element.toLowerCase()) as FormControl; // Pass form control instance

            break;
          }

          case 'Submit': {
            const factory: ComponentFactory<ButtonComponent> = this._resolver.resolveComponentFactory(ButtonComponent);
            this.buttonComponentRef = this.formContainer.createComponent(factory);
            this.buttonComponentRef.instance.label = f.Element;
            this.buttonComponentRef.instance.Clicked.subscribe(() => this.OnSubmit());
            break;
          }
          default: {
            const factory: ComponentFactory<ErrorComponent> = this._resolver.resolveComponentFactory(ErrorComponent);
            this.errorComponentRef = this.formContainer.createComponent(factory);
            this.errorComponentRef.instance.elementType = f.ElementType;
            this.errorComponentRef.instance.formElement = f.Element;
            break;
          }
        }

      });
    }
  }

  private getValidators(f: IFormElments) {
    const validators = [];
    if (f.Required) {
      validators.push(Validators.required);
    }
    if (f.MinLength) {
      validators.push(Validators.minLength(f.MinLength));
    }
    if (f.MaxLength) {
      validators.push(Validators.maxLength(f.MaxLength));
    }
    if (f.Pattern) {
      validators.push(Validators.pattern(f.Pattern));
    }
    return validators;
  }

  // GetErrorMessage(formControl: FormControl, label: string) {
  //   if (formControl.hasError('required')) {
  //     return `${label} is required`;
  //   } else if (formControl.hasError('minlength')) {
  //     const requiredLength = formControl.errors?.['minlength']?.requiredLength;
  //     return `${label} should be at least ${requiredLength} characters`;
  //   } else if (formControl.hasError('maxlength')) {
  //     const requiredLength = formControl.errors?.['maxlength']?.requiredLength;
  //     return `${label} should not exceed ${requiredLength} characters`;
  //   } else if (formControl.hasError('pattern')) {
  //     return `Invalid ${label}`;
  //   }
  //   return null;
  // }


}
