# Guide : Pousser le projet sur GitLab de l'école

## 📋 Prérequis

- ✅ Git installé sur ton ordinateur
- ✅ Accès au GitLab de l'école
- ✅ Ton compte créé sur GitLab

---

## 🚀 Étapes complètes

### **ÉTAPE 1 : Préparer le dépôt local (si pas déjà fait)**

```bash
# Se placer dans le répertoire du projet
cd C:\Users\steev\QL\Projet

# Initialiser le repository git LOCAL
git init

# Vérifier l'état
git status
```

**Résultat attendu** :
```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what to be committed)
        .gitignore
        README.md
        PRESENTATION.md
        cucumber.js
        ...
```

---

### **ÉTAPE 2 : Ajouter les fichiers et faire le premier commit**

```bash
# Ajouter tous les fichiers (sauf ceux dans .gitignore)
git add .

# Vérifier ce qui va être commité
git status

# Faire le premier commit
git commit -m "Initial commit: Projet automation E2E tests"
```

**Résultat attendu** :
```
[master (root-commit) abc1234] Initial commit: Projet automation E2E tests
 15 files changed, 500 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 ...
```

---

### **ÉTAPE 3 : Créer le dépôt sur GitLab de l'école**

1. **Aller sur** : `https://gitlab.votre-ecole.fr` (remplace par l'URL de ton école)

2. **Se connecter** avec tes identifiants scolaires

3. **Cliquer sur** : `New project` ou `+ New project`

4. **Configurer le projet** :
   - **Project name** : `Automation-Exercise-E2E`
   - **Project slug** : `automation-exercise-e2e` (auto-complété)
   - **Visibility** : Private (ou Public selon ta préférence)
   - **Initialize repository** : ❌ **DÉCOCHER** (on a déjà des fichiers)

5. **Créer le projet**

6. **Copier l'URL HTTPS** du dépôt (ressemble à) :
   ```
   https://gitlab.votre-ecole.fr/prenom.nom/automation-exercise-e2e.git
   ```

---

### **ÉTAPE 4 : Ajouter le remote et pousser**

```bash
# Ajouter le repository distant (remplace par ton URL)
git remote add origin https://gitlab.votre-ecole.fr/prenom.nom/automation-exercise-e2e.git

# Vérifier que le remote est ajouté
git remote -v

# Renommer la branche main (si nécessaire)
git branch -M main

# Pousser le code vers GitLab
git push -u origin main
```

**La première fois, tu devras t'authentifier** :
- **Username** : ton identifiant GitLab
- **Password** : ton token GitLab (voir étape 5 si erreur)

---

### **ÉTAPE 5 : Si erreur d'authentification**

**Problème** : 
```
fatal: Authentication failed
```

**Solution** : Utiliser un Personal Access Token au lieu du mot de passe

1. **Sur GitLab** : Aller dans **Settings** → **Access Tokens**

2. **Créer un token** :
   - **Name** : `gitlab-push`
   - **Scopes** : ✅ `api` + ✅ `read_repository` + ✅ `write_repository`
   - **Create personal access token**

3. **Copier le token** (tu ne pourras pas le voir après)

4. **Utiliser le token** :
   ```bash
   git push -u origin main
   # Username: ton-email-ou-username
   # Password: colle-le-token-ici
   ```

---

### **ÉTAPE 6 : Vérifier sur GitLab**

1. **Aller sur** : `https://gitlab.votre-ecole.fr/prenom.nom/automation-exercise-e2e`

2. **Vérifier que** :
   - ✅ Les fichiers sont visibles
   - ✅ Le README s'affiche
   - ✅ La structure du projet est présente
   - ✅ Pas de `node_modules/` (grâce au .gitignore)

---

## 📝 Commandes résumées (copier-coller)

```bash
# 1. Se placer dans le dossier
cd C:\Users\steev\QL\Projet

# 2. Initialiser git
git init

# 3. Ajouter tous les fichiers
git add .

# 4. Premier commit
git commit -m "Initial commit: Projet automation E2E tests"

# 5. Ajouter le remote (remplace l'URL)
git remote add origin https://gitlab.votre-ecole.fr/prenom.nom/automation-exercise-e2e.git

# 6. Pousser le code
git push -u origin main
```

---

## ✅ Vérification finale

Après le push, tu peux faire :

```bash
# Vérifier que tout est synchronisé
git status
# Doit afficher: "On branch main, Your branch is up to date with 'origin/main'"

# Voir l'historique des commits
git log
```

---

## 🔄 Pour les commits futurs

Après des modifications :

```bash
# Voir les fichiers modifiés
git status

# Ajouter les changements
git add .

# Committer avec un message clair
git commit -m "Décrire les changements"

# Pousser vers GitLab
git push
```

---

## 🚨 Erreurs courantes

| Erreur | Solution |
|--------|----------|
| `fatal: not a git repository` | Faire `git init` dans le bon dossier |
| `fatal: Authentication failed` | Utiliser un Personal Access Token |
| `error: src refspec main does not match any` | Utiliser `git branch -M main` avant `git push` |
| `node_modules/ uploaded` | Vérifier que `.gitignore` existe et contient `node_modules/` |

---

## 📞 Support

Si tu as des questions :
- Demande à un admin GitLab de l'école
- Consulte la doc : `git --help`
- Vérifie l'URL du GitLab de ton école

Bonne chance ! 🚀
