import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { finalize } from 'rxjs';
import { IStudent } from 'src/app/admin/interfaces/student';
import { StudentService } from 'src/app/admin/services/student.service';

@Component({
  selector: 'app-display-admin-students',
  templateUrl: './display-admin-students.component.html',
  styleUrls: ['./display-admin-students.component.scss']
})
export class DisplayAdminStudentsComponent {

  dataLoading: boolean = true;
  students: any;
  checked: boolean = true;
  addModal: boolean = false;
  editModal: boolean = false;
  alertMessage: string = '';
  alertColor: string = '';
  isAlert: boolean = false;
  currentStudentId: any;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    // Get All students
    this.studentService.getStudents().subscribe({
      next: (res: any) => {
        this.students = res;
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
  
  // Open edit Student
  openEditModal(studentId: any) {
    this.editModal = true;

    this.currentStudentId = studentId;
  }
  
  // Close edit Student
  closeEditModal() {
    this.editModal = false;
    this.ngOnInit()
  }

  // Remove Student
  removeStudent(
    student: IStudent,
    event: any
  ) {
    this.confirmationService.confirm({
      message:
        'Are you sure you want to delete ' +
        student.firstName +
        '?',
      target: event.target,
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteStudent(student.id);
        this.students = {};
      },
    });
  }

  // Delete Student by id
  deleteStudent(studentId: any) {
    this.studentService
      .deleteStudent(studentId)
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

