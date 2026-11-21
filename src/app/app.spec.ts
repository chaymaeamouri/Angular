import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App Root Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('1. L application principale doit être instanciée', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('2. L onglet par défaut doit être "all"', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.activeTab()).toBe('all');
  });

  it('3. setActiveTab() doit modifier le signal activeTab', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.setActiveTab('seance3');
    expect(app.activeTab()).toBe('seance3');
  });
});
