import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminStudentsComponent } from './edit-admin-students.component';

describe('EditAdminStudentsComponent', () => {
  let component: EditAdminStudentsComponent;
  let fixture: ComponentFixture<EditAdminStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdminStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdminStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
