import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdminStudentsComponent } from './display-admin-students.component';

describe('DisplayAdminStudentsComponent', () => {
  let component: DisplayAdminStudentsComponent;
  let fixture: ComponentFixture<DisplayAdminStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAdminStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAdminStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
