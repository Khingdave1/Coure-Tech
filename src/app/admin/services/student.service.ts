import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { IStudent } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string = 'https://sampleapi.coure-tech.com/api/';
  userData: any;

  constructor(private http: HttpClient, private router: Router) {}

  // get students
  getStudents(): Observable<IStudent> {
    return this.http
      .get<IStudent>(`${this.baseUrl}students`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Students fetched successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err.error.message));
        })
      );
  }

  // get student by Id
  getStudentById(studentId: any): Observable<IStudent> {
    return this.http
      .get<IStudent>(`${this.baseUrl}students/${studentId}`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Student fetched successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err.error.message));
        })
      );
  }

  // Add student
  addStudent(data: any): Observable<IStudent> {
    return this.http
      .post<IStudent>(`${this.baseUrl}students/`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`Student added successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err.error.message));
        })
      );
  }

  // Update student
  updateStudent(studentId: string, data: any): Observable<IStudent> {
    return this.http
      .put<IStudent>(
        `${this.baseUrl}students/${studentId}`,
        data,
      
      )
      .pipe(
        switchMap((res: any) => {
          console.log(`Student updated successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err.error.message));
        })
      );
  }

  // Delete Student
  deleteStudent(studentId: any): Observable<IStudent> {
    return this.http
      .delete<IStudent>(
        `${this.baseUrl}students/${studentId}`
      )
      .pipe(
        switchMap((res: any) => {
          console.log(`Student deleted successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to delete Student')
          );
        })
      );
  }
}
