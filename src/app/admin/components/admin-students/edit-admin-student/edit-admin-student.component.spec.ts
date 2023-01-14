import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminStudentComponent } from './edit-admin-students.component';

describe('EditAdminStudentsComponent', () => {
  let component: EditAdminStudentComponent;
  let fixture: ComponentFixture<EditAdminStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdminStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdminStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
