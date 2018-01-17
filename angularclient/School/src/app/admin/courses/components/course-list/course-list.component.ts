import {Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {Course} from "../../../../shared/model/course";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {ListChangedService} from "../../../../shared/services/list-changed.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, AfterViewInit {
  @Input('courses') courses: Course[];
  @Input('courseId') courseId;
  @Output('selectCourse') selectCourse = new EventEmitter();
  @Output('deleteCourse') deleteCourse = new EventEmitter();
  dataSource = new MatTableDataSource<Course>(this.courses);
  displayedColumns = ['name','department','description', 'delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(listChangedService: ListChangedService) {
    listChangedService.courseListChangeEvent.subscribe(data => {
      this.resetDataSource();
    });
  }


  ngOnInit() {
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.resetDataSource();
  }

  resetDataSource() {
    this.dataSource = new MatTableDataSource<Course>(this.courses);
    this.dataSource.paginator = this.paginator;

  }

  /**
   * delete course with id
   *
   * @param {string} id
   */
  deleteById(id: string) {
    this.deleteCourse.emit(id);
  }

  /**
   * edit course
   *
   * @param {Course} course
   */
  edit(course: Course) {
    this.selectCourse.emit(course);
  }


  /***
   * filter table data
   *
   * @param {string} filterValue
   */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  rowClicked(course: Course) {
    this.selectCourse.emit(course);
  }
}
