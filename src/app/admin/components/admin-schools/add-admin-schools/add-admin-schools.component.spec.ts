import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminSchoolsComponent } from './add-admin-schools.component';

describe('AddAdminSchoolsComponent', () => {
  let component: AddAdminSchoolsComponent;
  let fixture: ComponentFixture<AddAdminSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminSchoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdminSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
