import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PFormComponent } from './p-form/p-form.component';
import { TextComponent } from './p-form/text/text.component';
import { NumberComponent } from './p-form/number/number.component';
import { EmailComponent } from './p-form/email/email.component';
import { PasswordComponent } from './p-form/password/password.component';
import { TextareaComponent } from './p-form/textarea/textarea.component';
import { SelectComponent } from './p-form/select/select.component';
import { RadioComponent } from './p-form/radio/radio.component';
import { CheckboxComponent } from './p-form/checkbox/checkbox.component';
import { DateComponent } from './p-form/date/date.component';
import { FileComponent } from './p-form/file/file.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { ErrorComponent } from './p-form/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    PFormComponent,
    TextComponent,
    NumberComponent,
    EmailComponent,
    PasswordComponent,
    TextareaComponent,
    SelectComponent,
    RadioComponent,
    CheckboxComponent,
    DateComponent,
    FileComponent,
    ButtonComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
