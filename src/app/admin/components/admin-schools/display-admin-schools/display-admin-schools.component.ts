import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { finalize } from 'rxjs';
import { ISchool } from 'src/app/admin/interfaces/school';
import { SchoolService } from 'src/app/admin/services/school.service';

@Component({
  selector: 'app-display-admin-schools',
  templateUrl: './display-admin-schools.component.html',
  styleUrls: ['./display-admin-schools.component.scss']
})
export class DisplayAdminSchoolsComponent {

  dataLoading: boolean = true;
  schools: any;
  checked: boolean = true;
  addModal: boolean = false;
  editModal: boolean = false;
  alertMessage: string = '';
  alertColor: string = '';
  isAlert: boolean = false;
  currentSchoolId: any;

  constructor(
    private schoolService: SchoolService,
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    // Get All schools
    this.schoolService.getSchools().subscribe({
      next: (res: any) => {
        this.schools = res;
      },
      error: (e) => console.error(e),
      complete: () => {
        this.dataLoading = false;
      },
    });

    this.primengConfig.ripple = true;
  }

  // Open add Modal
  openAddModal() {
    this.addModal = true
  }

  // Close add modal
  closeAddModal() {
    this.addModal = false
    this.ngOnInit()
  }
  
  // Open edit School
  openEditModal(schoolId: any) {
    this.editModal = true;

    this.currentSchoolId = schoolId;
  }
  
  // Close edit School
  closeEditModal() {
    this.editModal = false;
    this.ngOnInit()
  }

  // Remove School
  removeSchool(
    school: ISchool,
    event: any
  ) {
    this.confirmationService.confirm({
      message:
        'Are you sure you want to delete ' +
        school.name +
        '?',
      target: event.target,
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteSchool(school.id);
        this.schools = {};
      },
    });
  }

  // Delete School by id
  deleteSchool(schoolId: any) {
    this.schoolService
      .deleteSchool(schoolId)
      .pipe(
        finalize(() => {
            this.ngOnInit();
        })
        )
        .subscribe({
          next: (res: any) => {
            console.log(res);
        },
        error: (e) => {
          console.error(e);
        },
      });
  }

  // Show alert
  showAlert(message: string, color: string) {
    // Set message
    this.alertMessage = message;
    // Set color
    this.alertColor = color;
    // Show Alert
    this.isAlert = true;
    // Hide Alert
    setTimeout(() => {
      this.isAlert = false;
    }, 3000);
  }

}
