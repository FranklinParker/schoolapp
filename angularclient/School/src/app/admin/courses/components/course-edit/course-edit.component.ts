import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Course} from "../../../../shared/model/course";
import {CourseService} from "../../../../shared/services/course.service";
import {Department} from "../../../../shared/model/department";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  @Input('course') course: Course = new Course();
  @Output('saveCourse') saveCourse = new EventEmitter();
  @Output('addNewCourse') addNewCourseEvent = new EventEmitter();

  departments: Department[] = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courseService.getDepartments().subscribe((departments) => this.departments = departments);
  }

  /**
   *
   *
   * @param {NgForm} f
   */
  save(f:NgForm) {
    const departmentId = f.value['department'];
    const department = this.departments.filter(department => department._id === departmentId)[0];
    const newCourse = !this.course.id;
    this.course.department = department;
    this.courseService.saveCourse(this.course)
      .subscribe(result => {
        this.saveCourse.emit({result: result.course, isNewCouse: newCourse});
      });
  }

  /**
   * Add new course, resets the course object to blank
   *
   */
  addNewCourse(){
    console.log('addNewCourseEvent');
    this.addNewCourseEvent.emit('addingnew');

  }
}
