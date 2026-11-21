import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { About } from './about/about';
import { TaskClassic } from './task-classic/task-classic';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Home, About, TaskClassic, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('5Gi - Cours Frontend Angular');

  // Onglet actif : 'all' (Tous), 'seance1', 'seance2', 'seance3'
  activeTab = signal<'all' | 'seance1' | 'seance2' | 'seance3'>('all');

  setActiveTab(tab: 'all' | 'seance1' | 'seance2' | 'seance3'): void {
    this.activeTab.set(tab);
  }
}
