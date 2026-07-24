import { Component, Inject } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './notification.html',
  styleUrl: './notification.css',

  // Component-level provider.
  // A new NotificationService instance is created
  // for every NotificationComponent.
  providers: [NotificationService]

})
export class NotificationComponent {

  constructor(
    @Inject(NotificationService) public notificationService: NotificationService
  ) {}

}