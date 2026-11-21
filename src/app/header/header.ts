import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Interpolation et liaison de propriétés
  title = 'TaskFlow';
  canDelete = false;

  rename(): void {
    this.title = 'Mes Tâches 5Gi';
    this.canDelete = true;
  }

  delete(): void {
    this.title = '';
    this.canDelete = false;
  }
}
