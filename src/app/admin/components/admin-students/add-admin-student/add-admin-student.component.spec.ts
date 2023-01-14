import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminStudentComponent } from './add-admin-student.component';

describe('AddAdminStudentComponent', () => {
  let component: AddAdminStudentComponent;
  let fixture: ComponentFixture<AddAdminStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdminStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
