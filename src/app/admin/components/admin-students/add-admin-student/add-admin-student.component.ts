import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { DepartmentService } from 'src/app/admin/services/department.service';
import { StudentService } from 'src/app/admin/services/student.service';

@Component({
  selector: 'app-add-admin-student',
  templateUrl: './add-admin-student.component.html',
  styleUrls: ['./add-admin-student.component.scss']
})
export class AddAdminStudentComponent {

  @Output() addModal: EventEmitter<any> = new EventEmitter();

  loading: boolean = false;
  alertMessage: string = '';
  alertColor: string = '';
  isAlert: boolean = false;
  studentForm: any = FormGroup;
  hide: boolean = true;
  isFormSubmitted: boolean = false;
  isSignedin: boolean = false;
  studentPayload: any;
  departments: any;
  department: any;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {

    // Get All departments
    this.departmentService.getDepartments().subscribe({
      next: (res: any) => {
        this.departments = res;
      },
      error: (e) => console.error(e),
    });

    // User form
    this.studentForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(11)]],
      address: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      department: ['', [Validators.required]],
    });
  }

  // Save and close student
  saveAndCloseStudent() {

    // Start loading
    this.loading = true;

    // Set submitted to true
    this.isFormSubmitted = true;

    // If Form is invalid
    if (this.studentForm.invalid) {
      this.loading = false;

      return;
    }

    this.setPayload()

    this.studentService
    .addStudent(this.studentPayload)
    .pipe(first())
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.showAlert('Student added successfully', 'success')

          // close Modal
          setTimeout(() => {
            this.closeAddModal();
          }, 3000);
        },
        error: (e) => {
          console.error(e);
          this.showAlert(e, 'error')
        },
      });
  }

  // Save and New student
  saveAndNewStudent() {

    // Start loading
    this.loading = true;

    // Set submitted to true
    this.isFormSubmitted = true;

    // If Form is invalid
    if (this.studentForm.invalid) {
      this.loading = false;

      return;
    }

    this.setPayload()

    this.studentService
    .addStudent(this.studentPayload)
    .pipe(first())
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.showAlert('Student added successfully', 'success')

          // Reset form
          this.studentForm.reset();

          this.loading = false
        },
        error: (e) => {
          console.error(e);
          this.showAlert(e, 'error')
        },
      });
  }

  // Set payload
  setPayload() {
    this.studentPayload = {
      firstName: this.studentForm.value.firstName,
      lastName: this.studentForm.value.lastName,
      title: this.studentForm.value.title,
      phoneNumber: this.studentForm.value.phoneNumber,
      email: this.studentForm.value.email,
      address: this.studentForm.value.address,
      dateOfBirth: this.studentForm.value.dateOfBirth,
      department: {
        name: this.studentForm.value.department,
        school: {
          name: ''
        }
      }
    }

    
  }

  // Close modal
  closeAddModal() {
    this.addModal.emit()
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
