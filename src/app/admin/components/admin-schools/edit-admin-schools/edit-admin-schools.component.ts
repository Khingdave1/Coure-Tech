import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { SchoolService } from 'src/app/admin/services/school.service';

@Component({
  selector: 'app-edit-admin-schools',
  templateUrl: './edit-admin-schools.component.html',
  styleUrls: ['./edit-admin-schools.component.scss']
})
export class EditAdminSchoolsComponent {

  @Output() editModal: EventEmitter<any> = new EventEmitter();
  @Input() schoolId: any;

  loading: boolean = false;
  alertMessage: string = '';
  alertColor: string = '';
  isAlert: boolean = false;
  hide: boolean = true;
  isFormSubmitted: boolean = false;
  isSignedin: boolean = false;
  schoolPayload: any;
  school: any;

  constructor(
    private formBuilder: FormBuilder,
    private schoolService: SchoolService,
    private datePipe: DatePipe
  ) {}

   // User form
   schoolForm = this.formBuilder.group({
    name: ['', [Validators.required]],
  });

  ngOnInit(): void {
    
    // Get All schools
    this.schoolService.getSchoolById(this.schoolId).subscribe({
      next: (res: any) => {
        this.school = res;
        
        // User form
        this.schoolForm = this.formBuilder.group({
          name: [this.school.name, [Validators.required]],
        });
      },
      error: (e) => console.error(e),
      // complete: () => {
      // },
    });

  }

  // update school
  updateSchool() {

    // Start loading
    this.loading = true;

    this.setPayload()

    this.schoolService
    .updateSchool(this.schoolId, this.schoolPayload)
    .pipe(first())
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.showAlert('School updated successfully', 'success')

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
    this.schoolPayload = {
      id: this.school.id,
      name: this.schoolForm.value.name,
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
