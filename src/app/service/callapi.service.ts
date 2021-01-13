import { Student } from './../teacher-request/teacher-request-get/teacher-request-get';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {
  addTeacherData(dataStudents: any) {
    throw new Error('Method not implemented.');
  }

  public static apiUrl = "https://3meetestclassroomapi.azurewebsites.net/api/";

  constructor(public http:HttpClient) { }

  public getDataStudentAll(){
    return this.http.get<Student[]>(CallapiService.apiUrl + "Classroom/GetdataStudentAll");
  }

  public getDataStudentByid(idStudent:string){
    return this.http.get<Student>(CallapiService.apiUrl + "Classroom/GetdataStudentByid/" + idStudent);
  }
}
