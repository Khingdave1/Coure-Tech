import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminSchoolComponent } from './edit-admin-school.component';

describe('EditAdminSchoolComponent', () => {
  let component: EditAdminSchoolComponent;
  let fixture: ComponentFixture<EditAdminSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdminSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdminSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
