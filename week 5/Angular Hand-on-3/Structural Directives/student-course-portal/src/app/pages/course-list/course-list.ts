import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  selectedCourseId: number | null = null;

  courses = [
    {
      id: 101,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 102,
      name: 'Java',
      code: 'JAVA102',
      credits: 3,
      gradeStatus: 'failed'
    },
    {
      id: 103,
      name: 'Spring Boot',
      code: 'SB103',
      credits: 4,
      gradeStatus: 'pending'
    },
    {
      id: 104,
      name: 'Python',
      code: 'PY104',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 105,
      name: 'Database Management',
      code: 'DB105',
      credits: 4,
      gradeStatus: 'pending'
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  // trackBy improves performance by reusing existing DOM elements.
  trackByCourseId(index: number, course: any) {
    return course.id;
  }
}