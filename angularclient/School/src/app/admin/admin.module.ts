import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseEditComponent } from './courses/components/course-edit/course-edit.component';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {SharedModule} from "../shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { CourseMainComponent } from './courses/components/course-main/course-main.component';
import { CourseListComponent } from './courses/components/course-list/course-list.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    BrowserModule,
    FormsModule,

  ],
  declarations: [CourseEditComponent, CourseMainComponent, CourseListComponent],
  exports: [CourseMainComponent]
})
export class AdminModule { }
