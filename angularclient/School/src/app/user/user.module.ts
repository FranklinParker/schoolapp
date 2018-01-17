import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    SharedModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class UserModule {
}
