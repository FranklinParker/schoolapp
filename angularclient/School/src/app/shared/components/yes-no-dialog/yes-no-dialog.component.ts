import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.css']
})
export class YesNoDialogComponent implements OnInit {
   message: string;
  constructor(public dialogRef: MatDialogRef<YesNoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.message = data.message;
  }


  ngOnInit() {
  }

  confirm(){

  }

}
