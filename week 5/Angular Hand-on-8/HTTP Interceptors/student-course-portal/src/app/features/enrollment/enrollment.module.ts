import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EnrollmentRoutingModule } from './enrollment-routing.module';

import { EnrollmentForm } from './enrollment-form/enrollment-form';
import { ReactiveEnrollmentForm } from './reactive-enrollment-form/reactive-enrollment-form';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    EnrollmentRoutingModule,

    EnrollmentForm,
    ReactiveEnrollmentForm

  ]
})
export class EnrollmentModule {}