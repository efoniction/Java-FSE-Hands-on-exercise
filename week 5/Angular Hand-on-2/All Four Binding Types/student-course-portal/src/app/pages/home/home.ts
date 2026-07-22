import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  // String Interpolation
  portalName = 'Student Course Portal';

  // Property Binding
  isPortalActive = true;

  // Event Binding
  message = '';

  // Two-Way Binding
  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  /*
   [property] is one-way binding (Component → View).
   [(ngModel)] is two-way binding (Component ↔ View).
  */
}