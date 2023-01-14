import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { SchoolService } from 'src/app/admin/services/school.service';

@Component({
  selector: 'app-add-admin-school',
  templateUrl: './add-admin-school.component.html',
  styleUrls: ['./add-admin-school.component.scss']
})
export class AddAdminSchoolComponent {

  @Output() addModal: EventEmitter<any> = new EventEmitter();

  loading: boolean = false;
  alertMessage: string = '';
  alertColor: string = '';
  isAlert: boolean = false;
  schoolForm: any = FormGroup;
  hide: boolean = true;
  isFormSubmitted: boolean = false;
  isSignedin: boolean = false;
  schoolPayload: any;

  constructor(
    private formBuilder: FormBuilder,
    private schoolService: SchoolService
  ) {}

  ngOnInit(): void {
    // User form
    this.schoolForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  // Save and close school
  saveAndCloseSchool() {

    // Start loading
    this.loading = true;

    // Set submitted to true
    this.isFormSubmitted = true;

    // If Form is invalid
    if (this.schoolForm.invalid) {
      this.loading = false;

      return;
    }

    this.setPayload()

    this.schoolService
    .addSchool(this.schoolPayload)
    .pipe(first())
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.showAlert('School added successfully', 'success')

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

  // Save and New school
  saveAndNewSchool() {

    // Start loading
    this.loading = true;

    // Set submitted to true
    this.isFormSubmitted = true;

    // If Form is invalid
    if (this.schoolForm.invalid) {
      this.loading = false;

      return;
    }

    this.setPayload()

    this.schoolService
    .addSchool(this.schoolPayload)
    .pipe(first())
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.showAlert('School added successfully', 'success')

          // Reset form
          this.schoolForm.reset();

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
    this.schoolPayload = {
      name: this.schoolForm.value.name,
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
