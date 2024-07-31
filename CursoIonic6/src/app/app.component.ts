import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuCollection = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Alert', url: 'alert', icon: 'dice' },
    { title: 'Button', url: 'button', icon: 'dice' },
    { title: 'Card', url: 'card', icon: 'card' }

  ];

  constructor() {}
}
