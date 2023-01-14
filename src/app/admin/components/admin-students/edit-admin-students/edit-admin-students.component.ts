import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { StudentService } from 'src/app/admin/services/student.service';

@Component({
  selector: 'app-edit-admin-students',
  templateUrl: './edit-admin-students.component.html',
  styleUrls: ['./edit-admin-students.component.scss']
})
export class EditAdminStudentsComponent {

  @Output() editModal: EventEmitter<any> = new EventEmitter();
  @Input() studentId: any;

  loading: boolean = false;
  alertMessage: string = '';
  alertColor: string = '';
  isAlert: boolean = false;
  hide: boolean = true;
  isFormSubmitted: boolean = false;
  isSignedin: boolean = false;
  studentPayload: any;
  student: any;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private datePipe: DatePipe
  ) {}

   // User form
   studentForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.minLength(11)]],
    address: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    department: ['', [Validators.required]],
    school: ['', [Validators.required]],
  });

  ngOnInit(): void {
    
    // Get All students
    this.studentService.getStudentById(this.studentId).subscribe({
      next: (res: any) => {
        this.student = res;
        
        // User form
        this.studentForm = this.formBuilder.group({
          title: [this.student.title, [Validators.required]],
          firstName: [this.student.firstName, [Validators.required]],
          lastName: [this.student.lastName, [Validators.required]],
          email: [this.student.email, [Validators.required, Validators.email]],
          phoneNumber: [this.student.phoneNumber, [Validators.required, Validators.minLength(11)]],
          address: [this.student.address, [Validators.required]],
          dateOfBirth: [this.datePipe.transform(this.student.dateOfBirth, 'yyyy-MM-dd'), [Validators.required]],
          department: [this.student.department, [Validators.required]],
          school: [this.student.school, [Validators.required]],
        });
      },
      error: (e) => console.error(e),
      // complete: () => {
      // },
    });

  }

  // update student
  updateStudent() {

    // Start loading
    this.loading = true;

    this.setPayload()

    this.studentService
    .updateStudent(this.studentId, this.studentPayload)
    .pipe(first())
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.showAlert('Student updated successfully', 'success')

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
    this.studentPayload = {
      id: this.student.id,
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
          name: this.studentForm.value.school
        }
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
