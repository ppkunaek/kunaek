import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRequestGetComponent } from './teacher-request-get.component';

describe('TeacherRequestGetComponent', () => {
  let component: TeacherRequestGetComponent;
  let fixture: ComponentFixture<TeacherRequestGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRequestGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRequestGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
