# Blagues Carambar - Projet CDA

Mini application web réalisée dans le cadre du projet de sélection CDA.  
Elle permet d’afficher des blagues aléatoires depuis une API personnalisée.

## Liens utiles

| Élement             | Lien                                                                 |
|---------------------|----------------------------------------------------------------------|
| 🔗 API (Back)        | [https://jokes-backend-lo7h.onrender.com](https://jokes-backend-lo7h.onrender.com) |
| 📘 Swagger (Docs)    | [https://jokes-frontend-coral.vercel.app/](https://jokes-frontend-coral.vercel.app/) |
| 🎨 Front (Landing)   | [https://jokes-frontend-9lzzjwozt-agathes-projects-ec7cb569.vercel.app/](https://jokes-frontend-9lzzjwozt-agathes-projects-ec7cb569.vercel.app/) |
| 💾 Repo GitHub (Back)| [https://github.com/agathecopain/jokes-frontend](https://github.com/agathecopain/jokes-frontend) |
| 💻 Repo GitHub (Front)| [https://github.com/agathecopain/jokes-backend](https://github.com/agathecopain/jokes-backend) |


## Lancer le projet en local

### 1. Cloner le dépôt

```bash
git clone https://github.com/ton-profil/jokes-backend.git
```
### 2. Installer le backend
```bash
cd jokes-backend
yarn
```
### 3. Créer un fichier .env
```bash
PORT=3000
CLIENT_URL=https://jokes-backend-lo7h.onrender.com
```
### 4. Lancer le serveur
```bash
yarn start
```

## Structure du projet (Backend)
```
jokes-frontend/
├── config/              # Configuration Sequelize
│   └── db.js
├── controllers/         
│   └── joke.controller.js
├── models/              # Modèles Sequelize
│   └── Joke.js
├── routes/              # Définition des routes
│   └── joke.routes.js
├── .env                 # Variables d’environnement
├── .gitignore
├── package.json
├── README.md
└── server.js            # Point d’entrée du serveur et config swagger
```