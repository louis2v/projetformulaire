import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { FormByCodeComponent } from './form-by-code/form-by-code.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    FormByCodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
