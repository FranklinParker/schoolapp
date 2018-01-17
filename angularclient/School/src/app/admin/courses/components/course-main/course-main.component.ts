import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../../../shared/services/course.service";
import {Course} from "../../../../shared/model/course";
import {MatDialog} from "@angular/material";
import {YesNoDialogComponent} from "../../../../shared/components/yes-no-dialog/yes-no-dialog.component";
import {ListChangedService} from "../../../../shared/services/list-changed.service";

@Component({
  selector: 'app-course-main',
  templateUrl: './course-main.component.html',
  styleUrls: ['./course-main.component.css']
})
export class CourseMainComponent implements OnInit {
  courses: Course[];
  courseId: string;
  selectedCourse: Course = new Course();
  editingCourse: Course = new Course();

  constructor(private courseService: CourseService,
              private dialogService: MatDialog,
              private listChangeServ: ListChangedService) {
  }

  ngOnInit() {

    this.courseService.getCourses()
      .subscribe((courses: Course[]) => {
        this.courses = courses;
      });
  }

  /**
   *  A new course has been seletected to be edited, check if any changes made to current course
   *  being edited
   *
   *
   * @param {Course} course
   */
  selectCourse(course: Course) {
    const dataChanged = !this.editingCourse.equals(this.selectedCourse);
    if (dataChanged) {
      const dialogRef = this.dialogService.open(YesNoDialogComponent, {
        height: '300px',
        width: '400px',
        data: {message: 'Changes have been made to current course data. Are you sure you want to edit a new course?'}
      });
      dialogRef.afterClosed().subscribe((yesNo: string) => {
        if (yesNo === 'yes') {
          this.resetCourseBeingEdited(course);
        }

      });

    } else {
      this.resetCourseBeingEdited(course);
    }
  }

  /**
   * a new course is added
   *
   * @param {string} msg
   */
  addNewCourse(msg:string){
    console.log('addNewCourse:'+ msg);

    const dataChanged = !this.editingCourse.equals(this.selectedCourse);
    if (dataChanged) {
      const dialogRef = this.dialogService.open(YesNoDialogComponent, {
        height: '300px',
        width: '400px',
        data: {message: 'Changes have been made to current course data. Are you sure you want to edit a new course?'}
      });
      dialogRef.afterClosed().subscribe((yesNo: string) => {
        if (yesNo === 'yes') {
          this.resetCourseBeingEdited(new Course());
        }

      });

    } else {
      this.resetCourseBeingEdited(new Course());
    }


  }
  /**
   * Delete course
   *
   * @param {string} id
   */
  deleteCourse(id: string) {
    const course = this.courses.filter(rec => rec.id == id)[0];
    const dialogRef = this.dialogService.open(YesNoDialogComponent, {
      height: '300px',
      width: '400px',
      data: {message: 'Are you sure you want to delete ' + course.name + ' ?'}
    });
    dialogRef.afterClosed().subscribe((yesNo: string) => {
      if (yesNo === 'yes') {
        this.courseService.deleteCourseById(id).subscribe(response => {
            if(response.status === 'success'){
              const index = this.courses.indexOf(course);
              if(index>=0)
                this.courses.splice(index, 1);
                this.listChangeServ.fireCourseListChangedEvent();
                this.resetCourseBeingEdited(new Course());


            }

          }
        );
      }

    });
  }

  /**
   *
   *
   * @param {{course: Course; isNewCouse: boolean}} saveResult
   */
  saveCourse(saveResult: {result: Course, isNewCouse: boolean}){
    if(saveResult.isNewCouse){
      this.courses.push(saveResult.result);
      this.listChangeServ.fireCourseListChangedEvent();
    } else{
      this.selectedCourse.description = this.editingCourse.description;
      this.selectedCourse.name = this.editingCourse.name;
      this.selectedCourse.department = this.editingCourse.department;
    }
  }

  /**
   * select a new course to be edited
   *
   * @param {Course} course
   */
  private resetCourseBeingEdited(course: Course) {
    this.selectedCourse = course;
    this.editingCourse = new Course(course.id, course.name, course.department, course.description);
    this.courseId = course.id;


  }

}
