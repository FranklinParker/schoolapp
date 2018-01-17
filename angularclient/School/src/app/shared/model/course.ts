import {Department} from "./department";

export class Course {
  id: string;
  department: Department;
  description: string;
  name: string;

  constructor(id?: string, name?: string, department?: Department,description?: string) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.description = description;

  }
  get departmentId(){
    return this.department ? this.department._id : null;
  }


  /**
   * compare 2 course objects
   *
   * @param {Course} course
   * @returns {boolean}
   */
  equals(course: Course):boolean {
    return (this.department===course.department
            && this.name ===course.name
            && this.description===course.description );
  }
}
