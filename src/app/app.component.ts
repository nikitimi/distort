import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@/components/header/header.js';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'distort';
  description = 'A web application clone of Discord.';
}
