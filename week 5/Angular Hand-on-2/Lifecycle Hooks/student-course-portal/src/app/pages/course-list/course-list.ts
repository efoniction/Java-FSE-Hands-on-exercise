import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from "../../components/course-card/course-card";

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css']
})
export class CourseList {

  courses = [
    {
      name: 'Angular',
      duration: '6 Weeks'
    },
    {
      name: 'Java',
      duration: '8 Weeks'
    },
    {
      name: 'Spring Boot',
      duration: '5 Weeks'
    }
  ];

}