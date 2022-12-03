import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Carbon Calculator', url: '/carbon-calculator', icon: 'calculator' },
    { title: 'Goal-Setting', url: '/goal-setting', icon: 'medal' },
    { title: 'Learn More', url: '/learn-more', icon: 'book' },
    { title: 'Gallery', url: '/gallery', icon: 'images' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
  ];

}
