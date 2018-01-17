import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';


import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {Department} from "../model/department";
import {Course} from "../model/course";


@Injectable()
export class CourseService {
  apiUrl = environment.serverUrl+'api/';

  constructor(private http: HttpClient) {
  }

  /**
   * gets a list of departments.
   *
   * @returns {Observable<Department[]>}
   */
  getDepartments(): Observable<Department[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.apiUrl + 'departments')
      .map((response: { result: string, records: Department[] }) => {
        console.log(response);
        return response.records;
      });


  }

  /**
   * Gets the entire list of courses
   *
   * @returns {Observable<Course[]>}
   */
  getCourses(): Observable<Course[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.apiUrl + 'courses')
      .map((response: { result: string, records: Course[] }) => {
        const courseList: Course [] = [];
        response.records.forEach(course => {
          const department = new Department(course.department._id,
                 course.department.code, course.department.name);
          courseList.push(new Course(course['_id'],
            course.name,
            department,
            course.description));

        });
        return courseList;
      });


  }

  deleteCourseById(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + 'admin/course/' + id)
      .map((response: Response) => {
        return response;

      });

  }

  /**
   * Saves a course
   *
   *
   * @param {Course} course
   * @returns {Observable<Response>}
   */
  saveCourse(course: Course): Observable<any> {
    const url = this.apiUrl + 'admin/course';
    return this.http.post(url, course)
      .map((response: Response) => {
        course.id = response['id'];
        const result = {
          course: course,
          status: response.status

        };
        return result;

      });

  }


}
