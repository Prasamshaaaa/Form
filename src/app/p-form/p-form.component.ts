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


  constructor(private fb: FormBuilder, private _resolver: ComponentFactoryResolver, private _cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({}); // Initialize form group

    this.form.formElements.forEach(f => {
      this.formGroup.addControl(f.Element.toLowerCase(), this.fb.control('')); // Adding form controls dynamically
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

}
