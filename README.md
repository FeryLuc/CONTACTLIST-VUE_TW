# Évaluation dans le cadre du cours Script Client traduite en Vue.js V1

## ContactList en Vue.js

Cette application a été développée en **Vue.js** et permet de gérer une liste de contacts en interaction avec **MockAPI**.  
Elle offre une interface simple et intuitive pour manipuler et organiser ses contacts.

---

## ✨ Fonctionnalités

### ➕ Ajout d’un contact

Permet d’ajouter un nouveau contact à l’aide d’un formulaire dédié.

### 🗑️ Suppression d’un contact

Un bouton intégré à chaque ligne du tableau permet de supprimer le contact correspondant.

### ✏️ Modification d’un contact

Un bouton _Modifier_ ouvre un formulaire pré-rempli afin de mettre à jour les informations du contact.

### 🔽🔼 Tri par colonnes

Un clic sur les en-têtes de colonnes (firstname, lastname, email) permet de trier le tableau en ordre croissant.

### 🔍 Barre de recherche

Une barre de recherche dynamique permet de filtrer les contacts en temps réel selon le prénom, le nom ou l’adresse e-mail.

---

## 🗄️ Utilisation de MockAPI

L’application utilise **MockAPI** pour gérer l’ensemble du CRUD :

- **GET** : récupération des contacts
- **POST** : ajout d’un nouveau contact
- **PUT** : modification d’un contact
- **DELETE** : suppression d’un contact

MockAPI sert de backend simulé, facilitant les tests et la gestion des données.

---

[Demo](https://feryluc.github.io/CONTACTLIST-VUE_TW/)
