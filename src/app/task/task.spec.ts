import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task } from './task';

describe('Task Component - Tests unitaires des Signals Angular (Séance 3)', () => {
  let component: Task;
  let fixture: ComponentFixture<Task>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task],
    }).compileComponents();

    fixture = TestBed.createComponent(Task);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('1. Le composant Task doit être créé avec succès', () => {
    expect(component).toBeTruthy();
  });

  it('2. tasks() signal doit démarrer avec 3 tâches initiales', () => {
    expect(component.tasks().length).toBe(3);
  });

  it('3. totalTasks computed() doit refléter exactement la longueur du tableau', () => {
    expect(component.totalTasks()).toBe(3);
  });

  it('4. completedTasks et remainingTasks computed() doivent être cohérents', () => {
    expect(component.completedTasks()).toBe(2);
    expect(component.remainingTasks()).toBe(1);
  });

  it('5. addTask() doit ajouter la tâche au signal via update()', () => {
    component.newTaskTitle.set('Nouvelle pratique Angular');
    component.addTask();

    expect(component.tasks().length).toBe(4);
    expect(component.totalTasks()).toBe(4);
    expect(component.tasks().at(-1)?.title).toBe('Nouvelle pratique Angular');
  });

  it('6. addTask() doit ignorer les chaînes vides ou espaces', () => {
    component.newTaskTitle.set('   ');
    component.addTask();

    expect(component.tasks().length).toBe(3);
  });

  it('7. addTask() doit vider le signal de saisie avec set("") après ajout', () => {
    component.newTaskTitle.set('Tâche test');
    component.addTask();

    expect(component.newTaskTitle()).toBe('');
  });

  it('8. renameTask() doit modifier le titre de la tâche avec update()', () => {
    component.renameTask(1, 'Titre mis à jour');

    const updated = component.tasks().find((t) => t.id === 1);
    expect(updated?.title).toBe('Titre mis à jour');
  });

  it('9. deleteTask() doit retirer la tâche par son identifiant avec update()', () => {
    component.deleteTask(2);

    expect(component.tasks().length).toBe(2);
    expect(component.tasks().some((t) => t.id === 2)).toBe(false);
  });

  it('10. toggleTask() doit inverser l état completed avec update()', () => {
    component.toggleTask(3);
    const task3 = component.tasks().find((t) => t.id === 3);
    expect(task3?.completed).toBe(true);
  });

  it('11. clearTasks() doit vider entièrement le tableau avec set([])', () => {
    component.clearTasks();

    expect(component.tasks()).toEqual([]);
    expect(component.totalTasks()).toBe(0);
  });

  it('12. resetTasks() doit recharger les données par défaut avec set()', () => {
    component.clearTasks();
    component.resetTasks();

    expect(component.tasks().length).toBe(3);
    expect(component.totalTasks()).toBe(3);
  });

  it('13. Fonctions du compteur signal (update et set)', () => {
    expect(component.compteur()).toBe(0);
    expect(component.doubleCompteur()).toBe(0);

    component.incrementerCompteur();
    expect(component.compteur()).toBe(1);
    expect(component.doubleCompteur()).toBe(2);

    component.decrementerCompteur();
    expect(component.compteur()).toBe(0);

    component.setCompteurCent();
    expect(component.compteur()).toBe(100);
    expect(component.doubleCompteur()).toBe(200);

    component.remettreCompteurZero();
    expect(component.compteur()).toBe(0);
  });
});
