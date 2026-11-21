import { Component, signal, computed } from '@angular/core';

export interface TaskItem {
  id: number;
  title: string;
  dueDate: Date;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  // 1) SIGNAL PRIMAIRE : État réactif contenant le tableau des tâches.
  //    Lecture dans le template avec tasks()
  tasks = signal<TaskItem[]>([
    { id: 1, title: 'Comprendre l architecture Standalone', dueDate: new Date('2026-11-10'), completed: true },
    { id: 2, title: 'Pratiquer le Data Binding (interpolation & events)', dueDate: new Date('2026-11-17'), completed: true },
    { id: 3, title: 'Maîtriser les Signals (signal, computed, update, set)', dueDate: new Date('2026-11-21'), completed: false },
  ]);

  // Signal lié au champ de saisie utilisateur
  newTaskTitle = signal<string>('');

  // Compteur interne pour les identifiants uniques
  private nextId = 4;

  // 2) COMPUTED SIGNALS : Valeurs dérivées recalculées automatiquement à chaque changement
  totalTasks = computed(() => this.tasks().length);
  completedTasks = computed(() => this.tasks().filter(t => t.completed).length);
  remainingTasks = computed(() => this.totalTasks() - this.completedTasks());

  // Démonstrateur de compteur avec Signals (Séance 3)
  compteur = signal(0);
  doubleCompteur = computed(() => this.compteur() * 2);

  // --- 3) MÉTHODES SET() : Remplacement complet de la valeur du signal ---
  
  clearTasks(): void {
    this.tasks.set([]);
  }

  resetTasks(): void {
    this.tasks.set([
      { id: 1, title: 'Comprendre l architecture Standalone', dueDate: new Date('2026-11-10'), completed: true },
      { id: 2, title: 'Pratiquer le Data Binding (interpolation & events)', dueDate: new Date('2026-11-17'), completed: true },
      { id: 3, title: 'Maîtriser les Signals (signal, computed, update, set)', dueDate: new Date('2026-11-21'), completed: false },
    ]);
    this.nextId = 4;
  }

  // --- 4) MÉTHODES UPDATE() : Mise à jour basée sur l'état précédent ---

  addTask(): void {
    const title = this.newTaskTitle().trim();
    if (!title) {
      return;
    }

    this.tasks.update((prevTasks) => [
      ...prevTasks,
      {
        id: this.nextId++,
        title,
        dueDate: new Date(),
        completed: false,
      },
    ]);

    this.newTaskTitle.set(''); // Vider le signal de saisie
  }

  deleteTask(id: number): void {
    this.tasks.update((prevTasks) => prevTasks.filter((t) => t.id !== id));
  }

  renameTask(id: number, newTitle: string): void {
    this.tasks.update((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task)),
    );
  }

  toggleTask(id: number): void {
    this.tasks.update((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  }

  // Fonctions du Compteur Signal (Séance 3)
  incrementerCompteur(): void {
    this.compteur.update((val) => val + 1);
  }

  decrementerCompteur(): void {
    this.compteur.update((val) => val - 1);
  }

  setCompteurCent(): void {
    this.compteur.set(100);
  }

  remettreCompteurZero(): void {
    this.compteur.set(0);
  }
}
