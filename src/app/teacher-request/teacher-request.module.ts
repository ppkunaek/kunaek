import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRequestGetComponent } from './teacher-request-get/teacher-request-get.component';



@NgModule({
  declarations: [TeacherRequestGetComponent],
  imports: [
    CommonModule
  ],
  exports: [TeacherRequestGetComponent]
})
export class TeacherRequestModule { }
