# Afro Izmir Hub

Site Next.js, TypeScript et Tailwind CSS pour une plateforme communautaire africaine a Izmir et en Turquie.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir ensuite l'URL affichee par Next.js, par exemple `http://localhost:3000`.

## Modifier les contenus

Les donnees mockees sont centralisees dans :

```text
src/lib/data.ts
```

Vous pouvez y modifier :

- le numero WhatsApp principal : `SITE_CONFIG.whatsappNumber`
- l'email et les reseaux sociaux
- les services
- les professionnels de l'annuaire
- les annonces
- les bons plans
- les articles du blog
- les prix des offres de partenariat

## Pages incluses

- Accueil
- Services
- Annuaire
- Annonces
- Publier une annonce
- Bons plans
- Infos utiles
- Contact
- Partenariat

## Scripts utiles

```bash
npm run lint
npm run build
```
