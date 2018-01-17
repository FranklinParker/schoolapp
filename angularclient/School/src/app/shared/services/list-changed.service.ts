import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ListChangedService {
  courseListChangeEvent = new EventEmitter();

  constructor() { }

  fireCourseListChangedEvent(){
    this.courseListChangeEvent.emit('new');
  }
}
