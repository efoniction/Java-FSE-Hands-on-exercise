import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { CourseService } from '../../services/course';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = '';
  agreeToTerms = false;

  submitted = false;

  constructor(
    @Inject(CourseService) private courseService: CourseService
  ) {}

  onSubmit(form: NgForm): void {

    console.log(form.value);
    console.log(form.valid);

    if (form.valid) {

      const newCourse = {
        name: this.studentName,
        code: `CS${this.courseId}`,
        credits: 3,
        gradeStatus: 'pending' as const
      };

      this.courseService.createCourse(newCourse).subscribe({

        next: (course: any) => {
          console.log('Course created:', course);
          alert('Course created successfully!');
          this.submitted = true;
          form.resetForm();
        },

        error: (err: any) => {
          console.error(err);
          alert('Failed to create course.');
        }

      });

    }

  }

}