import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { DepartmentService } from 'src/app/admin/services/department.service';
import { SchoolService } from 'src/app/admin/services/school.service';

@Component({
  selector: 'app-add-admin-department',
  templateUrl: './add-admin-department.component.html',
  styleUrls: ['./add-admin-department.component.scss']
})
export class AddAdminDepartmentComponent {
  @Output() addModal: EventEmitter<any> = new EventEmitter();

  loading: boolean = false;
  alertMessage: string = '';
  alertColor: string = '';
  isAlert: boolean = false;
  departmentForm: any = FormGroup;
  hide: boolean = true;
  isFormSubmitted: boolean = false;
  isSignedin: boolean = false;
  departmentPayload: any;
  schools: any;

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentService,
    private schoolService: SchoolService
  ) {}

  ngOnInit(): void {

    // Get All schools
    this.schoolService.getSchools().subscribe({
      next: (res: any) => {
        this.schools = res;
      },
      error: (e) => console.error(e),
    });

    // User form
    this.departmentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      school: ['', [Validators.required]],
    });
  }

  // Save and close department
  saveAndCloseDepartment() {

    // Start loading
    this.loading = true;

    // Set submitted to true
    this.isFormSubmitted = true;

    // If Form is invalid
    if (this.departmentForm.invalid) {
      this.loading = false;

      return;
    }

    this.setPayload()

    this.departmentService
    .addDepartment(this.departmentPayload)
    .pipe(first())
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.showAlert('Department added successfully', 'success')

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

  // Save and New department
  saveAndNewDepartment() {

    // Start loading
    this.loading = true;

    // Set submitted to true
    this.isFormSubmitted = true;

    // If Form is invalid
    if (this.departmentForm.invalid) {
      this.loading = false;

      return;
    }

    this.setPayload()

    this.departmentService
    .addDepartment(this.departmentPayload)
    .pipe(first())
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.showAlert('Department added successfully', 'success')

          // Reset form
          this.departmentForm.reset();

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
    this.departmentPayload = {
      name: this.departmentForm.value.name,
      school: {
        name: this.departmentForm.value.school
      }
    }

    console.log(this.departmentPayload);
    
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
