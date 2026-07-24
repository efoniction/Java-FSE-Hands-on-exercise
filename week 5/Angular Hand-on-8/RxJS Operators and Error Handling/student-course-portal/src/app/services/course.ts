import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  Observable,
  throwError
} from 'rxjs';

import {
  map,
  catchError,
  tap,
  retry
} from 'rxjs/operators';

import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/courses';

  constructor(
    private http: HttpClient
  ) {}

  // Task 83,84,85,86
  getCourses(): Observable<Course[]> {

    return this.http.get<Course[]>(this.apiUrl).pipe(

      // Transform response
      map(courses =>
        courses.filter(course => course.credits > 0)
      ),

      // Logging only
      tap(courses =>
        console.log('Courses loaded:', courses.length)
      ),

      // Retry twice
      retry(2),

      // Error handling
      catchError(error => {

        console.error(error);

        return throwError(() =>
          new Error('Failed to load courses. Please try again.')
        );

      })

    );

  }

  getCourseById(id: number): Observable<Course> {

    return this.http.get<Course>(
      `${this.apiUrl}/${id}`
    );

  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {

    return this.http.post<Course>(
      this.apiUrl,
      course
    );

  }

  updateCourse(course: Course): Observable<Course> {

    return this.http.put<Course>(
      `${this.apiUrl}/${course.id}`,
      course
    );

  }

  deleteCourse(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );

  }

}