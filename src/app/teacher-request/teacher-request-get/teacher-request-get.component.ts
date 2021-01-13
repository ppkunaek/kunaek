import { TeacherService } from './../../service/teacher.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CallapiService } from 'src/app/service/callapi.service';
import { Student, Teacher } from './teacher-request-get';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-teacher-request-get',
  templateUrl: './teacher-request-get.component.html',
  styleUrls: ['./teacher-request-get.component.css']
})
export class TeacherRequestGetComponent implements OnInit {

  teacherList: Teacher[] = [];
  teacherData: any = null;
  dataStudent: Student[] = [];
  data: any;
  dataTeacher: any;
  dataTeachers: any;
  teachereForm: FormGroup;
  dataFormEdit: FormGroup;
  dataEditTeacher: any;


  constructor(private http: HttpClient, private fb: FormBuilder, public callapi: CallapiService, public teacherapi: TeacherService) {
    this.teachereForm = this.fb.group({
      TeacherId: ['', Validators.required],
      TeacherName: ['', Validators.required],
      TeacherTel: ['', Validators.required],
      SubjectTaught: ['', Validators.required],
    })
    this.dataFormEdit = this.fb.group({
      TeacherId: [null, Validators.required],
      TeacherName: [null, Validators.required],
      TeacherTel: [null, Validators.required],
      SubjectTaught: [null, Validators.required],
    })
  

  }

  onSubmit() {
    console.log(this.teachereForm.value);
    this.dataTeachers = this.teachereForm.value;
    console.log(this.dataTeachers);
    this.addTeacherData();

  }


  submit() {
    alert('ทำการเพิ่มเรียบร้อย')
  }

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

  addTeacherData() {
    this.teacherapi.addDataTeacher(this.dataTeachers).subscribe((it) => {
      console.log(it);
      this.dataGetTeacherAll();

    });
  }

  editDataTeacher() {
    this.teacherapi.editDataTeacher(this.dataTeacher).subscribe((it) => {
      console.log(it);
      this.dataGetTeacherAll();

    });
  }

  dataStudentAll() {
    this.callapi.getDataStudentAll().subscribe((it) => {
      console.log(it);
      this.dataStudent = it;
      console.log(this.dataStudent);

    });
  }

  dataStudentByid(id: string) {
    this.callapi.getDataStudentByid(id).subscribe((it) => {
      console.log(it);
      this.data = it;
      console.log(this.data);

    });
  }

  dataGetTeacherAll() {
    this.teacherapi.getDataTeacherAll().subscribe((it) => {
      console.log(it);
      this.teacherList = it;
      console.log(this.teacherList);
    });
  }

  dataGetTeacherByid(idTeacher: string) {
    this.teacherapi.getDataTeacherByid(idTeacher).subscribe((it) => {
      console.log(it);
      this.teacherData = it;
      console.log(this.teacherData);

    });
  }


 
  editdata(t: Teacher) {
    console.log(t);
    this.dataFormEdit.patchValue({
      TeacherId:t.teacherId,
      TeacherName:t.teacherName,
      TeacherTel:t.teacherTel,
      SubjectTaught:t.subjectTaught    
    });
    console.log(this.dataFormEdit.value);
  }
  
  editStudentData(){
    console.log(this.dataFormEdit.value);
    this.teacherapi.editDataTeacher(this.dataFormEdit.value).subscribe((it) =>{
      console.log(it);
      this.dataGetTeacherAll();
    });
  }


}
