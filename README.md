# Mimisbrunnr Frontend

Het project staat in de repo-root; voer de npm-commando's hieronder daar uit.

## Opstarten
1. Installeer de dependencies met `npm install`

2. Maak een `.env`-bestand aan in de root van het project met volgende inhoud:
```env
	VITE_API_URL=https://localhost:5001/api
```

3. Start de applicatie met `npm run dev`

## Technologieën
- React
- React Router
- Vite
- Axios
- SWR
- Motion
- ESLint

## Vereisten
- Node.js 18 of nieuwer
- npm

## Deployment
Gebruik de repo-root als Docker-buildcontext en `Dockerfile` als pad. De Compose-config staat buiten deze repo; pas op de server verwijzingen naar de oude submap `mimisbrunnr-frontend/` aan vóór deployment.
