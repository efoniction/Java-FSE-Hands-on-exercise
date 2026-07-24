import { Component, Output, EventEmitter, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';

import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';

import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';
import { Observable, Subscribable } from 'rxjs';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  readonly course = input.required<Course>();

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;
enrolledIds$: Observable<unknown> | Subscribable<unknown> | PromiseLike<unknown> | undefined;

  constructor(
    private store: Store,
    public enrollmentService: EnrollmentService
  ) {}

  toggleEnroll(): void {

    const courseId = this.course().id;

    if (this.enrollmentService.isEnrolled(courseId)) {

      // Service
      this.enrollmentService.unenroll(courseId);

      // NgRx Action
      this.store.dispatch(
        unenrollFromCourse({ courseId })
      );

    } else {

      // Service
      this.enrollmentService.enroll(courseId);

      // NgRx Action
      this.store.dispatch(
        enrollInCourse({ courseId })
      );

      this.enrollRequested.emit(courseId);
    }

  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
    return {
      'card--enrolled': this.enrollmentService.isEnrolled(this.course().id),
      'card--full': this.course().credits >= 4,
      'expanded': this.isExpanded
    };
  }

  get borderColor(): string {

    switch (this.course().gradeStatus) {

      case 'passed':
        return 'green';

      case 'failed':
        return 'red';

      case 'pending':
        return 'gray';

      default:
        return 'black';

    }

  }

}