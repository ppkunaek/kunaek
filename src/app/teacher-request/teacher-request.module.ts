import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRequestGetComponent } from './teacher-request-get/teacher-request-get.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [TeacherRequestGetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [TeacherRequestGetComponent]
})
export class TeacherRequestModule { }
