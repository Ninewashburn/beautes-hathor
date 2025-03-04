# Les Beautés d'Hathor - Site Web

## Présentation du Projet

"Les Beautés d'Hathor" est un site web pour un institut de beauté et de bien-être, conçu pour offrir une expérience utilisateur élégante et intuitive. Le site présente les services de l'institut, ses tarifs, une galerie de photos, ainsi que des informations de contact et pratiques.

## Évolution du Projet

### Version Originale

Le site était initialement développé avec des technologies web traditionnelles :

- HTML statique
- CSS basique
- JavaScript vanilla
- PHP pour les formulaires de contact

Cette version présentait une structure simple avec des fonctionnalités limitées et sans optimisation particulière pour le référencement ou les appareils mobiles.

### Version Actuelle

Le site a été entièrement reconstruit avec des technologies modernes pour améliorer l'expérience utilisateur, les performances et le référencement :

- **Framework** : Next.js 14 (React)
- **Langage** : TypeScript
- **Styles** : TailwindCSS
- **Rendu** : Server-Side Rendering (SSR) pour optimisation SEO
- **Responsive** : Design adaptatif pour tous les appareils

## Fonctionnalités Ajoutées

Par rapport à la version originale, le site propose désormais :

- **Navigation Améliorée** : Menu responsive et intuitif
- **Page d'Accueil Enrichie** : Sections organisées avec carrousel, témoignages et informations pratiques
- **Prestations Détaillées** : Catégorisation des services avec filtrage dynamique
- **Tarifs Structurés** : Présentation claire et organisée des prix
- **Galerie Photos** : Présentation élégante des réalisations
- **Formulaire de Contact** : Interface moderne avec validation
- **Mentions Légales** : Page dédiée aux informations juridiques (absente de la version originale)
- **Optimisation SEO** : Métadonnées, sitemap.xml et robots.txt
- **Marques Partenaires** : Mise en valeur des collaborations
- **Responsive Design** : Adaptation à tous les formats d'écran

## Technologies Utilisées

- **Next.js** : Framework React avec rendu côté serveur
- **TypeScript** : Typage statique pour une meilleure maintenabilité
- **TailwindCSS** : Framework CSS utilitaire pour un design cohérent
- **Radix UI** : Composants accessibles et personnalisables
- **Lucide React** : Icônes vectorielles modernes
- **Embla Carousel** : Carrousel performant et accessible
- **React Hook Form** : Gestion des formulaires avec validation

## Optimisations

- **Performance** : Chargement optimisé des images et des ressources
- **SEO** : Métadonnées, structure sémantique et génération de sitemap
- **Accessibilité** : Composants accessibles et navigation au clavier
- **UX/UI** : Interface utilisateur intuitive et esthétique
- **Mobile-First** : Design pensé d'abord pour les appareils mobiles

## Structure du Projet

```
beautes-hathor/
├── app/                  # Pages et routes de l'application
│   ├── contact/          # Page de contact
│   ├── galerie/          # Galerie photos
│   ├── mentions-legales/ # Mentions légales
│   ├── prestations/      # Services proposés
│   ├── tarif/            # Grille tarifaire
│   └── page.tsx          # Page d'accueil
├── components/           # Composants réutilisables
├── public/               # Ressources statiques (images, etc.)
├── styles/               # Styles globaux
└── lib/                  # Utilitaires et fonctions
```

## Installation et Développement

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-compte/beautes-hathor.git

# Installer les dépendances
cd beautes-hathor
npm install

# Lancer le serveur de développement
npm run dev
```

### Production

```bash
# Construire l'application
npm run build

# Démarrer le serveur de production
npm start
```

## Évolutions Futures

- Système de réservation en ligne
- Blog avec conseils beauté et bien-être
- Intégration de réseaux sociaux
- Système de fidélité client
- Version multilingue

---

© 2025 Les Beautés d'Hathor - Tous droits réservés
