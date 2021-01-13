import { Teacher, Student } from './../teacher-request/teacher-request-get/teacher-request-get';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  addTeacher(data: any) {
    throw new Error('Method not implemented.');
  }

  public static apiUrl = "https://3meetestclassroomapi.azurewebsites.net/api/";

  constructor(public http: HttpClient) { }

  public getDataTeacherAll() {
    return this.http.get<Teacher[]>(TeacherService.apiUrl + "Classroom/GetdataTeacherAll");
  }

  public getDataTeacherByid(idTeacher: string) {
    return this.http.get<Teacher>(TeacherService.apiUrl + "Classroom/GetdataTeacherByid/" + idTeacher);
  }

  public addDataTeacher(dataTeachers:Teacher) {
    return this.http.post<Teacher>(TeacherService.apiUrl + "Classroom/AddDataTeacher", dataTeachers);
  }

  public editDataTeacher(dataTeacher: Teacher) {
    return this.http.put<Teacher>(TeacherService.apiUrl + "Classroom/EditDataTeacher", dataTeacher);
  }
}

