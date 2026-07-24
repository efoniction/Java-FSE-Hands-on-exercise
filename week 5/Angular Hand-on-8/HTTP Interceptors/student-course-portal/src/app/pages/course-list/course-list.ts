import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseCard } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard,
    HighlightDirective
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: Course[] = [];

  searchTerm = '';

  selectedCourseId?: number;

  isLoading = true;

  errorMessage = '';

  constructor(
    @Inject(CourseService) private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

  this.courseService.getCourses().subscribe({

    next: (courses) => {

      this.courses = courses;

    },

    error: (err) => {

      this.errorMessage = err.message;

      this.isLoading = false;

    },

    complete: () => {

      this.isLoading = false;

    }

  });

  const search =
    this.route.snapshot.queryParamMap.get('search');

  if (search) {

    this.searchTerm = search;

  }

}

  // Improves performance by reusing DOM elements
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

  // Navigate to Course Detail page
  goToCourse(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  // Update URL with search query parameter
  searchCourses(): void {
    this.router.navigate(
      ['courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );
  }

}