
import { Teacher } from './../teacher-request/teacher-request-get/teacher-request-get';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  public static apiUrl = "https://3meetestclassroomapi.azurewebsites.net/api/";

  constructor(public http: HttpClient) { }

  public getDataTeacherAll() {
    return this.http.get<Teacher[]>(TeacherService.apiUrl + "Classroom/GetdataTeacherAll");
  }

  public getDataTeacherByid(idTeacher: string) {
    return this.http.get<Teacher>(TeacherService.apiUrl + "Classroom/GetdataTeacherByid/" + idTeacher);
  }
}
