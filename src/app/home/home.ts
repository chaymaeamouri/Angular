import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  welcomeMessage = 'Bienvenue sur le portail de travaux pratiques Angular';
  courseTitle = 'Architecture Standalone et Composants';
}
