# Mimisbrunnr Frontend

De volledige instructies staan in de [README in de repository-root](../README.md): installatie, backend, lokaal inloggen, accountrollen en tests.

Vanuit deze map:

```sh
npm ci
cp .env.example .env
npm run dev -- --port 5173 --strictPort
```

Open `http://localhost:5173` nadat de backend is gestart. De standaard API-URL in `.env.example` is `https://localhost:5001/api`.

Vereisten: Node.js 22.12+ (of 20.19+) en npm.
