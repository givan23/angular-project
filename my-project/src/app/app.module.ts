import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ButtonFormComponent } from './form-elements/button-form/button-form.component';
import { InputFormComponent } from './form-elements/input-form/input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    InputFormComponent,
    ButtonFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
