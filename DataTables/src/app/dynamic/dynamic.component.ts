import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";
import { DataServiceService } from '../services/data-service.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  constructor(private dataServiceService:DataServiceService) { }

  students: Observable<Student[]>;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();
  student : Student=new Student();
  deleteMessage=false;
  isupdated = false;

  ngOnInit() {
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };  

    this.dataServiceService.getStudentList().subscribe(data =>{
      console.log("Getting Data==>"+data);
      this.students =data;
      this.dtTrigger.next();
      })
  }

  ngDataLoadInDataTable(){

  }

  deleteStudent(student_id: number) {
    this.dataServiceService.deleteStudent(student_id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.dataServiceService.getStudentList().subscribe(data =>{
            this.students =data
            })
        },
        error => console.log(error));
  }
}
