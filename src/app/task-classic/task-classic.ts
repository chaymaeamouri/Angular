import { Component } from '@angular/core';

@Component({
  selector: 'app-task-classic',
  standalone: true,
  imports: [],
  templateUrl: './task-classic.html',
  styleUrl: './task-classic.css',
})
export class TaskClassic {
  // Liste classique de tâches pour la démonstration Séance 2
  taches: string[] = [
    'Apprendre le data binding (interpolation, property, event)',
    'Créer la liste de tâches avec les nouvelles directives',
    'Tester le flux conditionnel et l état vide (@empty)',
  ];

  // Gestion du titre de la section
  sousTitre: string = 'Gestion classique des tâches (Séance 2)';

  ajouterTache(nouvelleTache: string): void {
    const titreNettoye = nouvelleTache.trim();
    if (titreNettoye) {
      this.taches.push(titreNettoye);
    }
  }

  supprimerTache(index: number): void {
    this.taches.splice(index, 1);
  }

  viderTaches(): void {
    this.taches = [];
  }

  reinitialiserTaches(): void {
    this.taches = [
      'Apprendre le data binding (interpolation, property, event)',
      'Créer la liste de tâches avec les nouvelles directives',
      'Tester le flux conditionnel et l état vide (@empty)',
    ];
  }
}
