import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly baseUrl = 'api/courses';

  constructor(private http: HttpClient) {}

  createCourse(course: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, course);
  }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
