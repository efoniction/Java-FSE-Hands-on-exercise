import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses = 0;

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    // Get all courses from the CourseService
    this.courses = this.courseService.getCourses();

    // Display live course count
    this.availableCourses = this.courses.length;

    console.log('HomeComponent initialised — courses loaded');

  }

  ngOnDestroy(): void {

    console.log('HomeComponent destroyed');

  }

  onEnrollClick(): void {

    this.message = 'Enrollment opened!';

  }

}