import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CourseMainComponent} from "./admin/courses/components/course-main/course-main.component";
import {LoginComponent} from "./user/components/login/login.component";


const appRoutes = [
  {
    path: 'admin/course',
    component: CourseMainComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
