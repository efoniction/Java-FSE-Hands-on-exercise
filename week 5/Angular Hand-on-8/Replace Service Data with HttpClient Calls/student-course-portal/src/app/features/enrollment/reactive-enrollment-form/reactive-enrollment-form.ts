import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentForm {

  enrollForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.enrollForm = this.fb.group({
      studentName: [''],
      studentEmail: [''],
      courseId: [''],
      preferredSemester: ['Odd'],
      agreeToTerms: [false]
    });

  }

  onSubmit(): void {
    console.log(this.enrollForm.value);
  }

  // Used by the CanDeactivate guard
  canDeactivate(): boolean {

    if (this.enrollForm.dirty) {

      return window.confirm(
        'You have unsaved changes. Leave?'
      );

    }

    return true;

  }

}
