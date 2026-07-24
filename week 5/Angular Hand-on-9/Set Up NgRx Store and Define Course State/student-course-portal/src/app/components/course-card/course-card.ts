import { Component, Output, EventEmitter, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';

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
enroll() {
throw new Error('Method not implemented.');
}

  readonly course = input.required<Course>();

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  constructor(
    public enrollmentService: EnrollmentService
  ) {}

  toggleEnroll(): void {

    if (this.enrollmentService.isEnrolled(this.course().id)) {

      this.enrollmentService.unenroll(this.course().id);

    } else {

      this.enrollmentService.enroll(this.course().id);

      this.enrollRequested.emit(this.course().id);

    }

  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Getter keeps the template clean by moving logic to TypeScript.
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