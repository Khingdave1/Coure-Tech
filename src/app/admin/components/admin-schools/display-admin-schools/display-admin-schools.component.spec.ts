import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdminSchoolsComponent } from './display-admin-schools.component';

describe('DisplayAdminSchoolsComponent', () => {
  let component: DisplayAdminSchoolsComponent;
  let fixture: ComponentFixture<DisplayAdminSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAdminSchoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAdminSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
