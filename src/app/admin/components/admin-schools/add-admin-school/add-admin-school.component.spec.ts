import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminSchoolComponent } from './add-admin-school.component';

describe('AddAdminSchoolComponent', () => {
  let component: AddAdminSchoolComponent;
  let fixture: ComponentFixture<AddAdminSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdminSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
