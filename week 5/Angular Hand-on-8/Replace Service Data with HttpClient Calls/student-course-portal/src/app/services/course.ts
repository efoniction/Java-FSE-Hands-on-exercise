import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      code: 'CS101',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'CS102',
      credits: 4,
      gradeStatus: 'failed'
    },
    {
      id: 3,
      name: 'Python',
      code: 'CS103',
      credits: 2,
      gradeStatus: 'pending'
    },
    {
      id: 4,
      name: 'Spring Boot',
      code: 'CS104',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 5,
      name: 'MySQL',
      code: 'CS105',
      credits: 3,
      gradeStatus: 'pending'
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}