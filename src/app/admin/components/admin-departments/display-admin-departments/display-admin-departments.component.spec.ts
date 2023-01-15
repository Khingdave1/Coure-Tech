import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdminDepartmentsComponent } from './display-admin-departments.component';

describe('DisplayAdminDepartmentsComponent', () => {
  let component: DisplayAdminDepartmentsComponent;
  let fixture: ComponentFixture<DisplayAdminDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAdminDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAdminDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
