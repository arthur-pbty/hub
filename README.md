# Hub ArthurP

Hub centralisant tous les projets et outils d'ArthurP.

**URL officielle :** https://arthurp.fr

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript + Tailwind CSS 4
- SEO & JSON-LD structuré

## Démarrage local

```bash
npm install
npm run dev      # Développement sur http://localhost:3000
npm run build    # Build production
npm run start    # Lancer le build
npm run lint     # Vérifier le code
```

## Docker

```bash
docker compose --profile dev up --build    # Mode dev sur port 3000
docker compose --profile prod up --build   # Mode prod sur port 3018
```

## Structure

```
src/
  app/
    projets/        # Pages détaillées par projet
    legal/          # Mentions, confidentialité, CGU
    page.tsx        # Accueil avec liste des projets
  components/       # Composants réutilisables
public/
  robots.txt, ...   # Assets publics
```

## Notes

- `.env*` et `.vscode/` sont ignorés (ne pas versionner de secrets)
- Secrets internes à définir avant déploiement
- Tous droits réservés © 2026
