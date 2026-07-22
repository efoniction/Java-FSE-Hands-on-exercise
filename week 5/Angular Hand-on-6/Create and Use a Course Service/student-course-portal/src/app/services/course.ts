import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'TypeScript Basics',
      code: 'TS102',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 3,
      name: 'Web Development',
      code: 'WD103',
      credits: 4,
      gradeStatus: 'pending'
    },
    {
      id: 4,
      name: 'Database Systems',
      code: 'DB104',
      credits: 3,
      gradeStatus: 'failed'
    },
    {
      id: 5,
      name: 'Software Engineering',
      code: 'SE105',
      credits: 4,
      gradeStatus: 'passed'
    }
  ];

  constructor() {}

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