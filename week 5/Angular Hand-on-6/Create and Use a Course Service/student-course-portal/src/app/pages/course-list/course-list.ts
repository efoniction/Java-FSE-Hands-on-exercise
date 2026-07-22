import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';

import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard,
    HighlightDirective
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: Course[] = [];

  selectedCourseId: number | null = null;

  isLoading = true;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    // Simulate loading
    setTimeout(() => {
      this.courses = this.courseService.getCourses();
      this.isLoading = false;
    }, 1500);

  }

  // trackBy improves performance by reusing existing DOM elements
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {

    console.log('Enrolling in course: ' + courseId);

    this.selectedCourseId = courseId;

  }

}