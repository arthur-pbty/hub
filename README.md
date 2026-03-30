# Hub ArthurP

Hub centralisant les projets et outils d'ArthurP.

Le site regroupe des applications web (productivite, utilitaires, education, etc.) avec une page detaillee pour chaque projet, des pages legales, et les elements SEO (robots, sitemap, donnees structurees).

## Site en production

- URL officielle: https://arthurp.fr

## Stack technique

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Fonctionnalites principales

- Page d'accueil avec presentation des projets
- Pages dediees par projet dans `src/app/projets/*`
- Pages legales dans `src/app/legal/*`
- SEO technique avec `public/robots.txt` et `src/app/sitemap.ts`
- Donnees structurees JSON-LD via composant reutilisable

## Installation locale

Pre-requis:

- Node.js 20+
- npm

Installation:

```bash
npm install
```

## Lancer le projet

Developpement:

```bash
npm run dev
```

Build de production:

```bash
npm run build
```

Lancer le build en local:

```bash
npm run start
```

Lint:

```bash
npm run lint
```

## Scripts npm

- `dev`: demarre le serveur Next.js en mode developpement
- `build`: genere le build de production
- `start`: demarre le serveur sur le build genere
- `lint`: verifie la qualite du code avec ESLint

## Structure du projet

```text
src/
	app/
		page.tsx
		layout.tsx
		globals.css
		legal/
		projets/
		sitemap.ts
	components/
public/
	robots.txt
```

## Publication GitHub

Points importants avant push:

- Ne jamais versionner de secrets ou credentials
- Verifier que les fichiers d'environnement restent ignores (`.env*`)
- Verifier que les configurations locales editeur/deploiement restent ignorees (`.vscode/`)

## License

Projet prive - tous droits reserves sauf mention contraire.
