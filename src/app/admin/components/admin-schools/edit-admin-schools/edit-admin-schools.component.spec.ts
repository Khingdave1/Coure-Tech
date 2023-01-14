import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminSchoolsComponent } from './edit-admin-schools.component';

describe('EditAdminSchoolsComponent', () => {
  let component: EditAdminSchoolsComponent;
  let fixture: ComponentFixture<EditAdminSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdminSchoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdminSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
