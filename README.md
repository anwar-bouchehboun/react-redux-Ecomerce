# E-Commerce React Redux Application

## 🛍️ Aperçu

Une application e-commerce moderne construite avec React et Redux, offrant une expérience d'achat fluide avec authentification utilisateur, gestion de panier et filtrage de produits.

## ✨ Fonctionnalités

- 🔐 Authentification utilisateur
- 🛒 Gestion du panier d'achat
- 🔍 Filtrage des produits par :
  - Catégorie
  - Genre
  - Couleur
  - Taille
  - Prix
- 📱 Interface responsive
- 🎨 Design moderne avec Tailwind CSS
- 🔄 Gestion d'état avec Redux Toolkit

## 🛠️ Technologies Utilisées

- **Frontend:**

  - React.js
  - Redux Toolkit
  - React Router DOM
  - Tailwind CSS
  - Material Tailwind

- **Gestion d'État:**
  - Redux pour la gestion globale de l'état
  - Session Storage pour la persistance des données

## 🚀 Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/anwar-bouchehboun/react-redux-Ecomerce.git
```

2. Installez les dépendances :

```bash
cd react-redux-Ecomerce
npm install
```

3. Lancez l'application :

```bash
npm start
```

## 📁 Structure du Projet

```
src/
├── app/
│   └── store.js
├── assets/
│   ├── data/
│   └── images/
├── components/
│   ├── Cart/
│   ├── FilteredProducts/
│   ├── Login/
│   ├── Navbar/
│   └── ...
├── features/
│   └── slices/
└── ...
```

## 🔒 Authentification

L'application utilise une validation de formulaire pour l'authentification :

- Nom d'utilisateur : 4-10 caractères
- Mot de passe : 4-10 caractères incluant chiffres, lettres et caractères spéciaux

## 🛍️ Fonctionnalités du Panier

- Ajout/Suppression de produits
- Sélection de taille et couleur
- Calcul automatique du total
- Persistance des données du panier

## 🎨 Personnalisation des Produits

Les utilisateurs peuvent :

- Filtrer par catégorie de produits
- Trier par prix
- Filtrer par genre
- Sélectionner taille et couleur

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte à tous les appareils.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer votre branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request
