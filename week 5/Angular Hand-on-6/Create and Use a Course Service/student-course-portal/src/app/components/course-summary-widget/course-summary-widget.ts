import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidget implements OnInit {

  totalCourses = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.totalCourses = this.courseService.getCourses().length;
  }

  addSampleCourse(): void {

    this.courseService.addCourse({
      id: 6,
      name: 'Machine Learning',
      code: 'ML601',
      credits: 4,
      gradeStatus: 'pending'
    });

    this.totalCourses = this.courseService.getCourses().length;
  }

}