import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { DepartmentService } from 'src/app/admin/services/department.service';

@Component({
  selector: 'app-edit-admin-department',
  templateUrl: './edit-admin-department.component.html',
  styleUrls: ['./edit-admin-department.component.scss']
})
export class EditAdminDepartmentComponent {
  
  @Output() editModal: EventEmitter<any> = new EventEmitter();
  @Input() departmentId: any;

  loading: boolean = false;
  alertMessage: string = '';
  alertColor: string = '';
  isAlert: boolean = false;
  hide: boolean = true;
  isFormSubmitted: boolean = false;
  isSignedin: boolean = false;
  departmentPayload: any;
  department: any;

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentService,
    private datePipe: DatePipe
  ) {}

   // User form
   departmentForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    school: ['', [Validators.required]],
  });

  ngOnInit(): void {
    
    // Get All departments
    this.departmentService.getDepartmentById(this.departmentId).subscribe({
      next: (res: any) => {
        this.department = res;
        
        // User form
        this.departmentForm = this.formBuilder.group({
          name: [this.department.name, [Validators.required]],
          school: [this.department.school, [Validators.required]],
        });
      },
      error: (e) => console.error(e),
      // complete: () => {
      // },
    });

  }

  // update department
  updateDepartment() {

    // Start loading
    this.loading = true;

    this.setPayload()

    this.departmentService
    .updateDepartment(this.departmentId, this.departmentPayload)
    .pipe(first())
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.showAlert('Department updated successfully', 'success')

          // close Modal
          setTimeout(() => {
            this.closeeditModal();
          }, 3000);
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
      id: this.department.id,
      name: this.departmentForm.value.name,
      school: {
        name: this.departmentForm.value.school
      }
    }
  }

  // Close modal
  closeeditModal() {
    this.editModal.emit()
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
