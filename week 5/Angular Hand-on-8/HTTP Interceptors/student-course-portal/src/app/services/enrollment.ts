import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Course } from '../models/course.model';
import { CourseService } from './course';

interface Student {
  id: number;
  name: string;
  courseId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  constructor(private http: HttpClient, private courseService: CourseService) {}

  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http.get<Student[]>(
      `http://localhost:3000/students?courseId=${courseId}`
    );
  }

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {
    const courseObservables = this.enrolledCourseIds.map(id => this.courseService.getCourseById(id));
    return courseObservables.length ? forkJoin(courseObservables) : new Observable<Course[]>(subscriber => { subscriber.next([]); subscriber.complete(); });
  }

}