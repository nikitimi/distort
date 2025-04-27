import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly title = signal('distort')

  checkForRoutes(): void {
    console.log('Checking for routes...');
  }
  constructor() {
    this.checkForRoutes();
  }
}
