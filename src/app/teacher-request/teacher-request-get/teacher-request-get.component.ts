import { TeacherService } from './../../service/teacher.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CallapiService } from 'src/app/service/callapi.service';
import { Student, Teacher } from './teacher-request-get';


@Component({
  selector: 'app-teacher-request-get',
  templateUrl: './teacher-request-get.component.html',
  styleUrls: ['./teacher-request-get.component.css']
})
export class TeacherRequestGetComponent implements OnInit {
  teacherList: Teacher[] = [];
  teacherData:any;
  dataStudent: Student[] = [];
  data:any;
  idStudent: string = "25a62b6a-c39a-4177-b390-91989a949f06";

  constructor(private http: HttpClient, public callapi: CallapiService, public teacherapi:TeacherService) { }

  ngOnInit(): void {
    // this.http.get<Teacher[]>('https://3meetestclassroomapi.azurewebsites.net/api/Classroom/GetdataTeacherAll')
    // .subscribe(response=>{
    //   this.teacherList = response;
    //   console.log('response', response);
    // })
    // this.dataStudentAll();
    // this.dataStudentByid(this.idStudent);
    this.dataGetTeacherAll();
  }

  dataStudentAll() {
    this.callapi.getDataStudentAll().subscribe((it) => {
      console.log(it);
      this.dataStudent = it;
      console.log(this.dataStudent);
      
    });
  }

  dataStudentByid(id:string){
    this.callapi.getDataStudentByid(id).subscribe((it) =>{
      console.log(it);
      this.data = it;
      console.log(this.data);
      
    });
  }

  dataGetTeacherAll(){
    this.teacherapi.getDataTeacherAll().subscribe((it) =>{
      console.log(it);
      this.teacherList = it;
      console.log(this.teacherList);
    });
  }

  dataGetTeacherByid(idTeacher:string){
    this.teacherapi.getDataTeacherByid(idTeacher).subscribe((it) =>{
      console.log(it);
      this.teacherData = it;
      console.log(this.teacherData);
      
    });
  }

}
