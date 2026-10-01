# Mimisbrunnr Frontend

React-website voor Heimdal. De applicatie staat in de submap **`mimisbrunnr-frontend/`**; voer de npm-commando's daar uit.

## Snel starten

Benodigd: **Node.js 22.12+** en npm. Vite 7 ondersteunt ook Node 20.19+. Zie de [Vite-vereisten](https://vite.dev/guide/). De API vereist .NET 9 en MariaDB/MySQL; volg eerst de [backend-README](https://github.com/Heimdalbe/Mimisbrunnr-backend#readme) van de bijbehorende featurebranch.

Vanaf de root van deze repository:

```sh
cd mimisbrunnr-frontend
npm ci
cp .env.example .env
npm run dev -- --port 5173 --strictPort
```

Open **http://localhost:5173**. Laat deze terminal en de backendterminal open. Stop een server met `Ctrl+C`.

Op Windows kun je `.env.example` in VS Code kopiëren en hernoemen naar `.env`, of `Copy-Item .env.example .env` uitvoeren in PowerShell.

De `.env` bevat:

```env
VITE_API_URL=https://localhost:5001/api
```

Dit is de volledige API-basis inclusief `/api`; de frontend voegt endpointpaden toe. Herstart Vite als je `.env` wijzigt. Bewaar echte geheimen niet in Vite-variabelen: ze komen in de browser terecht. `.env` wordt door Git genegeerd.

## Backend en inloggen

De browser moet het lokale HTTPS-certificaat vertrouwen. Gebruik `dotnet dev-certs https --trust` en open zo nodig eerst `https://localhost:5001/swagger` om het ontwikkelingscertificaat te vertrouwen. Frontend en backend moeten allebei via `localhost` worden benaderd. De backend-CORS-origin moet exact `http://localhost:5173` zijn; een andere host of poort geeft CORS-problemen.

Een verse lokale backenddatabase in `Development` bevat deze demoaccounts:

- Beheerder: `praeses@heimdal.be`, wachtwoord `A1b2C3!`.
- Gewoon lid: `quaestor@heimdal.be`, wachtwoord `A1b2C3!`.

Deze gegevens gelden alleen voor de lokale ontwikkelingsdata. Voor een gedeelde testomgeving zijn een eigen `Hmdl`-adminaccount en een account dat aangepast mag worden nodig. Voor rolbeheer is geen Imgur-account nodig.

Ga naar **http://localhost:5173/admin/accounts**, log in als beheerder en klik bij een account op **Rollen beheren**. Selecteer de gewenste rollen en klik **Rollen opslaan**. Uitgevinkte rollen worden verwijderd; meerdere rollen zijn mogelijk. De eigen `Hmdl`-rol is vergrendeld om uitsluiting te voorkomen. Wijzigingen gelden bij het volgende API-verzoek; andere gebruikers kunnen de pagina vernieuwen om bijgewerkte rechten in de navigatie te zien.

Identity-accountrollen bepalen toegang. De bestaande pagina **Praesidium → Functies** beheert praesidiumfuncties, geen accountrechten. Vrije rolnamen toevoegen is geen onderdeel van deze accounteditor; de lijst komt uit de backend.

## Commando's

```sh
npm run dev       # Ontwikkelingsserver
npm run build     # Productiebestanden naar dist/
npm run preview   # Lokale preview van een bestaande build
npm run lint      # Codecontrole
```

Voor de lokale preview op een andere poort moet de backend `Frontend:Origin` die poort toestaan. Publiceren van een featurebranch activeert het bestaande deployproces op `prod` niet.

## Handmatig testen

1. Open `/admin/accounts` zonder sessie: de loginpagina verschijnt; na login kom je terug op de gevraagde adminpagina.
2. Klik bij `quaestor@heimdal.be` op **Rollen beheren**. De opgeslagen rollen zijn aangevinkt.
3. Wijzig een rol en klik **Herstellen**: de laatste opgeslagen selectie komt terug.
4. Voeg een editorrol toe, sla op en vernieuw de pagina: de selectie blijft behouden.
5. Controleer in een aparte sessie dat het lid die rechten krijgt en accountrolbeheer zelf niet kan openen.
6. Verwijder de toegekende rol en controleer de toegang opnieuw. De backend weigert verwijderde rechten bij het volgende verzoek.
7. Open je eigen rollen: `Hmdl` kan niet worden uitgevinkt. Bij een mislukte opslag verschijnt een foutmelding en kun je opnieuw proberen.

## Structuur

- `src/main.jsx`: routes, waaronder de beschermde `/admin/accounts/:id/roles`.
- `src/contexts/AuthContext.jsx`: sessie en ingelogde gebruiker.
- `src/api`: Axios en API-functies; cookies worden meegestuurd.
- `src/pages/Admin/Accounts`: accountpagina's en `AdminAccountRoles.jsx`.
- `src/components/Admin/Accounts`: accounttabel en `AccountRolesForm`.
- `src/components/Common/ProtectedRoute.jsx`: rolcontrole voor navigatie; de backend controleert toegang eveneens.

Technologieën: React 19, React Router, Vite, Axios, SWR, Motion en ESLint.
