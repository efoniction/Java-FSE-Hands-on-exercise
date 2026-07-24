import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CourseCard } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';

import { Course } from '../../models/course.model';

import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';

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

  courses$!: Observable<Course[]>;

  searchTerm = '';

  selectedCourseId?: number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    // Dispatch action to load courses
    this.store.dispatch(loadCourses());

    // Read courses from NgRx Store
    this.courses$ = this.store.select(selectAllCourses);

    // Read query parameter
    const search = this.route.snapshot.queryParamMap.get('search');

    if (search) {
      this.searchTerm = search;
      console.log('Search:', search);
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