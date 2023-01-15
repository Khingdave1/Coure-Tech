import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { IDepartment } from '../interfaces/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  baseUrl: string = 'https://sampleapi.coure-tech.com/api/';
  userData: any;

  constructor(private http: HttpClient, private router: Router) {}

  // get departments
  getDepartments(): Observable<IDepartment> {
    return this.http
      .get<IDepartment>(`${this.baseUrl}departments`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Departments fetched successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err));
        })
      );
  }

  // get department by Id
  getDepartmentById(departmentId: any): Observable<IDepartment> {
    return this.http
      .get<IDepartment>(`${this.baseUrl}departments/${departmentId}`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Department fetched successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err));
        })
      );
  }

  // Add department
  addDepartment(data: any): Observable<IDepartment> {
    return this.http
      .post<IDepartment>(`${this.baseUrl}departments/`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`Department added successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err));
        })
      );
  }

  // Update department
  updateDepartment(departmentId: string, data: any): Observable<IDepartment> {
    return this.http
      .put<IDepartment>(
        `${this.baseUrl}departments/${departmentId}`,
        data,
      
      )
      .pipe(
        switchMap((res: any) => {
          console.log(`Department updated successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err.error.message));
        })
      );
  }

  // Delete department
  deleteDepartment(departmentId: any): Observable<IDepartment> {
    return this.http
      .delete<IDepartment>(
        `${this.baseUrl}departments/${departmentId}`
      )
      .pipe(
        switchMap((res: any) => {
          console.log(`Department deleted successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to delete Department')
          );
        })
      );
  }

}
