import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { ISchool } from '../interfaces/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  baseUrl: string = 'https://sampleapi.coure-tech.com/api/';
  userData: any;

  constructor(private http: HttpClient, private router: Router) {}

  // get schools
  getSchools(): Observable<ISchool> {
    return this.http
      .get<ISchool>(`${this.baseUrl}schools`)
      .pipe(
        switchMap((res: any) => {
          console.log(`Schools fetched successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err));
        })
      );
  }

  // get school by Id
  getSchoolById(schoolId: any): Observable<ISchool> {
    return this.http
      .get<ISchool>(`${this.baseUrl}schools/${schoolId}`)
      .pipe(
        switchMap((res: any) => {
          console.log(`School fetched successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err));
        })
      );
  }

  // Add school
  addSchool(data: any): Observable<ISchool> {
    return this.http
      .post<ISchool>(`${this.baseUrl}schools/`, data)
      .pipe(
        switchMap((res: any) => {
          console.log(`School added successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err));
        })
      );
  }

  // Update school
  updateSchool(schoolId: string, data: any): Observable<ISchool> {
    return this.http
      .put<ISchool>(
        `${this.baseUrl}schools/${schoolId}`,
        data,
      
      )
      .pipe(
        switchMap((res: any) => {
          console.log(`School updated successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err.error.message));
        })
      );
  }

  // Delete School
  deleteSchool(schoolId: any): Observable<ISchool> {
    return this.http
      .delete<ISchool>(
        `${this.baseUrl}schools/${schoolId}`
      )
      .pipe(
        switchMap((res: any) => {
          console.log(`School deleted successfully`, res);
          return of(res);
        }),
        catchError((err: any) => {
          return throwError(
            () => new Error('Failed to delete School')
          );
        })
      );
  }

}
