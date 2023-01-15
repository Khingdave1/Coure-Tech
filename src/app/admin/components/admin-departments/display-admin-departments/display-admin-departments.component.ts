import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { finalize } from 'rxjs';
import { IDepartment } from 'src/app/admin/interfaces/department';
import { DepartmentService } from 'src/app/admin/services/department.service';

@Component({
  selector: 'app-display-admin-departments',
  templateUrl: './display-admin-departments.component.html',
  styleUrls: ['./display-admin-departments.component.scss']
})
export class DisplayAdminDepartmentsComponent {
  dataLoading: boolean = true;
  departments: any;
  checked: boolean = true;
  addModal: boolean = false;
  editModal: boolean = false;
  alertMessage: string = '';
  alertColor: string = '';
  isAlert: boolean = false;
  currentDepartmentId: any;

  constructor(
    private departmentService: DepartmentService,
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    // Get All departments
    this.departmentService.getDepartments().subscribe({
      next: (res: any) => {
        this.departments = res;
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
  
  // Open edit department
  openEditModal(departmentId: any) {
    this.editModal = true;

    this.currentDepartmentId = departmentId;
  }
  
  // Close edit department
  closeEditModal() {
    this.editModal = false;
    this.ngOnInit()
  }

  // Remove department
  removeDepartment(
    department: IDepartment,
    event: any
  ) {
    this.confirmationService.confirm({
      message:
        'Are you sure you want to delete ' +
        department.name +
        '?',
      target: event.target,
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteDepartment(department.id);
        this.departments = {};
      },
    });
  }

  // Delete department by id
  deleteDepartment(departmentId: any) {
    this.departmentService
      .deleteDepartment(departmentId)
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
