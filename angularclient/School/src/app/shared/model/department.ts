export class Department {
  _id: string;
  code: string;
  name: string;

  constructor(id?: string, code?: string, name?: string) {
    this._id= id;
    this.code = code;
    this.name = name;

  }
}
