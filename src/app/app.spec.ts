import '@angular/compiler';
import { describe, it, beforeEach, expect } from 'vitest';
import { App } from './app';

describe('App Root Component', () => {
  let app: App;

  beforeEach(() => {
    app = new App();
  });

  it('1. L application principale doit être instanciée', () => {
    expect(app).toBeTruthy();
  });

  it('2. L onglet par défaut doit être "all"', () => {
    expect(app.activeTab()).toBe('all');
  });

  it('3. setActiveTab() doit modifier le signal activeTab', () => {
    app.setActiveTab('seance3');
    expect(app.activeTab()).toBe('seance3');
  });
});
