import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) {
    return null;
  }
  return value.toLowerCase().includes('course') ? { noCourseCode: true } : null;
}



@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

  this.enrollForm = this.fb.group({

    studentName: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],

    studentEmail: this.fb.control(
      '',
      [
        Validators.required,
        Validators.email
      ]
    ),

    courseId: [
      '',
      [
        Validators.required,
        noCourseCode
      ]
    ],

    preferredSemester: [
      'Odd',
      Validators.required
    ],

    agreeToTerms: [
      false,
      Validators.requiredTrue
    ],

    additionalCourses: this.fb.array([])

  });

}
get additionalCourses(): FormArray {
  return this.enrollForm.get('additionalCourses') as FormArray;
}

// Getter keeps the template clean by avoiding repeated casting.

addCourse() {
  this.additionalCourses.push(
    new FormControl('', Validators.required)
  );
}

removeCourse(index: number) {
  this.additionalCourses.removeAt(index);
}

onSubmit() {

  console.log(this.enrollForm.value);

  console.log(this.enrollForm.getRawValue());

}

}