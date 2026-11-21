# Angular Cours & Pratiques - 5Gi 🚀

Dépôt officiel des pratiques et travaux réalisés lors des séances de travaux pratiques du cours Frontend Angular (Filière 5Gi).

---

## 📋 Progression Pédagogique par Séance

### 📦 Séance 1 : Prise en main et Composants Autonomes (Standalone)
* **Concepts :**
  * Architecture Angular moderne (v19/v21) sans NgModules.
  * Création des composants autonomes (`standalone: true`).
  * Intégration dans `app.ts` via le tableau `imports: [Header, Footer, Home, About]`.
  * Structure des composants : Template HTML, styles CSS scoped, et classe TypeScript.

### 📋 Séance 2 : Data Binding & Directives de Contrôle de flux (TaskFlow)
* **Concepts :**
  * **Interpolation** : Affichage dynamique de données (`{{ title }}`).
  * **Property Binding** : Contrôle dynamique des attributs (`[disabled]="!canDelete"`).
  * **Event Binding** : Gestion des interactions utilisateur (`(click)="rename()"`, `(keyup.enter)="ajouterTache()"`).
  * **Variables de référence de template** : `#nouvelleTacheInput` pour capturer les valeurs du DOM.
  * **Nouvelles directives de contrôle de flux Angular** :
    * `@for (tache of taches; track $index)` : Rendu itératif optimisé.
    * `@empty` : Gestion native de l'état vide.
    * `@if` : Rendu conditionnel.

### ⚡ Séance 3 (21/11/2026) : Gestion Réactive avec les Signals Angular
* **Concepts :**
  * **`signal<T>(valeurInitiale)`** : Déclaration de variables d'état réactives (`tasks`, `newTaskTitle`, `compteur`).
  * **`computed(() => ...)`** : Calcul automatique et dérivé de l'état (`totalTasks`, `completedTasks`, `doubleCompteur`).
  * **`signal.update(fn)`** : Mise à jour basée sur la valeur précédente (ajout, modification, suppression par identifiant).
  * **`signal.set(nouvelleValeur)`** : Remplacement complet de la valeur du signal (vider, réinitialiser).
  * **Tests unitaires** : Suite complète de tests (`task.spec.ts`) validant le comportement des signaux.

---

## 🛠️ Installation et Exécution

```bash
# 1. Cloner le dépôt
git clone <votre-url-github>

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement local
npm start
# ou
npx ng serve

# 4. Lancer les tests unitaires
npm test
```

L'application sera accessible dans le navigateur à l'adresse suivante :  
👉 **[http://localhost:4200/](http://localhost:4200/)**

---

## 🧪 Tests Unitaires
Le projet inclut une suite de tests unitaires pour valider les composants et les signaux :
* `src/app/task/task.spec.ts` : 13 scénarios de test couvrant les opérations `signal`, `computed`, `set` et `update`.
* `src/app/app.spec.ts` : Tests du composant racine et de la navigation par onglets.
