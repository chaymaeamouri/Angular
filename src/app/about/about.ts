import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  studentName = 'Étudiant 5Gi';
  description = 'Ce projet réunit les exercices pratiques demandés en fin de chaque séance de cours Angular.';
}
