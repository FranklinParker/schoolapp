import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {CourseService} from "./services/course.service";
import { YesNoDialogComponent } from './components/yes-no-dialog/yes-no-dialog.component';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {ListChangedService} from "./services/list-changed.service";
import {UserService} from "./services/user.service";


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forChild([]),
    AngularMaterialModule
  ],
  entryComponents: [
    YesNoDialogComponent
  ],
  providers: [
    CourseService,
    ListChangedService,
    UserService
  ],
  declarations: [NavBarComponent, YesNoDialogComponent],
  exports: [

    NavBarComponent,
    YesNoDialogComponent

  ]
})
export class SharedModule {
}

