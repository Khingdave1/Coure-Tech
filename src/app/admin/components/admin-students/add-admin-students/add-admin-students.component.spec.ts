import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminStudentsComponent } from './add-admin-students.component';

describe('AddAdminStudentsComponent', () => {
  let component: AddAdminStudentsComponent;
  let fixture: ComponentFixture<AddAdminStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdminStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
