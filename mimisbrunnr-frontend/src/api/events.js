const longMockDescription =
  "Dit is opzettelijk extra lange mocktekst voor layouttesten op desktop en mobiel. " +
  "Deze paragraaf bestaat uit meerdere losse zinnen die vooral lengte toevoegen zodat kaarten, detailpagina's en knoppen in verschillende schermgroottes betrouwbaar kunnen worden beoordeeld. " +
  "Er staat bewust een mix van concrete en vage informatie in, zoals een denkbeeldige route langs een neon kiosk, een tafel met papieren sterren en een klok die te laat en toch op tijd lijkt te lopen. " +
  "Daarna volgt nog meer tekst over wachtrijen, jasrekken, confetti in de gang, een microfoon die piept en een vrijwilliger die notities maakt op een servet zonder dat iemand weet waarom. " +
  "Voor testdoeleinden herhalen we expliciet dat de inhoud niet belangrijk is maar de hoeveelheid wel, zodat afbrekingen, marges, line-height en overflow zichtbaar worden in elke component. " +
  "Tot slot blijft de toon expres licht absurd met verwijzingen naar een omgekeerde plattegrond, een kartonnen maan boven de ingang, een lijst met vergeten spullen en een slotapplaus dat al begint voor het programma officieel start.";

const events = [
  {
    id: 3,
    image: "/Movienight.png",
    date: new Date("2026-04-22T19:00:00"),
    title: "Movie night",
    start_time: "19:00",
    end_time: "23:00",
    type: "cultuur",
    location: "Campus Schoonmeersen",
    description:
      "Movie night editie april met extra testtekst voor de detailpagina. " +
      longMockDescription,
  },
  {
    id: 4,
    image: "/Bowling.png",
    date: new Date("2026-05-05T14:00:00"),
    title: "Bowling",
    start_time: "14:00",
    end_time: "18:00",
    type: "sport",
    location: "O'Learys",
    description:
      "Bowling namiddag met extra testtekst voor layout en overflow controle. " +
      longMockDescription,
  },
  {
    id: 5,
    image: "/Schaaktoernooi.png",
    date: new Date("2026-06-01T13:00:00"),
    title: "Schaaktoernooi",
    start_time: "13:00",
    end_time: "18:00",
    type: "sport",
    location: "Comic Sans",
    description:
      "Schaaktoernooi versie met lange beschrijving voor visuele stresstest. " +
      longMockDescription,
  },
  {
    id: 6,
    image: "/Tetristoernooi.png",
    date: new Date("2026-06-13T13:00:00"),
    title: "Tetris toernooi",
    start_time: "13:00",
    end_time: "18:00",
    type: "sport",
    location: "Comic Sans",
    description:
      "Tetris toernooi met extra lange mockinhoud voor scrollgedrag en spacing. " +
      longMockDescription,
  },
  {
    id: 7,
    image: "/Movienight.png",
    date: new Date("2026-07-16T19:00:00"),
    title: "Movie night",
    start_time: "19:00",
    end_time: "23:00",
    type: "cultuur",
    location: "Campus Schoonmeersen",
    description:
      "Movie night zomereditie met veel tekst om de layout maximaal uit te rekken. " +
      longMockDescription,
  },
  {
    id: 8,
    image: "/Bowling.png",
    date: new Date("2026-07-28T14:00:00"),
    title: "Bowling",
    start_time: "14:00",
    end_time: "18:00",
    type: "sport",
    location: "O'Learys",
    description:
      "Bowling zomereditie met uitgebreide mocktekst voor componentvalidatie. " +
      longMockDescription,
  },
  {
    id: 9,
    image: "/Schaaktoernooi.png",
    date: new Date("2026-08-12T13:00:00"),
    title: "Schaaktoernooi",
    start_time: "13:00",
    end_time: "18:00",
    type: "sport",
    location: "Comic Sans",
    description:
      "Schaaktoernooi augustus met extra lange inhoud voor tekstweergave tests. " +
      longMockDescription,
  },
  {
    id: 10,
    image: "/Tetristoernooi.png",
    date: new Date("2026-08-25T13:00:00"),
    title: "Tetris toernooi",
    start_time: "13:00",
    end_time: "18:00",
    type: "sport",
    location: "Comic Sans",
    description:
      "Tetris editie augustus met veel extra zinnen voor line break verificatie. " +
      longMockDescription,
  },
  {
    id: 11,
    image: "/Movienight.png",
    date: new Date("2026-09-10T19:00:00"),
    title: "Movie night",
    start_time: "19:00",
    end_time: "23:00",
    type: "cultuur",
    location: "Campus Schoonmeersen",
    description:
      "Movie night september met langdurige mocktekst voor responsieve checks. " +
      longMockDescription,
  },
  {
    id: 12,
    image: "/Bowling.png",
    date: new Date("2026-09-22T14:00:00"),
    title: "Bowling",
    start_time: "14:00",
    end_time: "18:00",
    type: "sport",
    location: "O'Learys",
    description:
      "Bowling september met grote hoeveelheid tekst voor card en detail tests. " +
      longMockDescription,
  },
  {
    id: 13,
    image: "/Schaaktoernooi.png",
    date: new Date("2026-10-05T13:00:00"),
    title: "Schaaktoernooi",
    start_time: "13:00",
    end_time: "18:00",
    type: "sport",
    location: "Comic Sans",
    description:
      "Schaaktoernooi oktober met opzettelijk lange omschrijving voor mockdoelen. " +
      longMockDescription,
  },
  {
    id: 14,
    image: "/Tetristoernooi.png",
    date: new Date("2026-10-18T13:00:00"),
    title: "Tetris toernooi",
    start_time: "13:00",
    end_time: "18:00",
    type: "sport",
    location: "Comic Sans",
    description:
      "Tetris oktober met lange testinhoud zodat alles ruim gevuld wordt. " +
      longMockDescription,
  },
  {
    id: 15,
    image: "/Movienight.png",
    date: new Date("2026-11-02T19:00:00"),
    title: "Movie night",
    start_time: "19:00",
    end_time: "23:00",
    type: "cultuur",
    location: "Campus Schoonmeersen",
    description:
      "Movie night november met extra grote tekstblokken voor robuuste layouttests. " +
      longMockDescription,
  },
  {
    id: 16,
    image: "/Bowling.png",
    date: new Date("2026-11-15T14:00:00"),
    title: "Bowling",
    start_time: "14:00",
    end_time: "18:00",
    type: "sport",
    location: "O'Learys",
    description:
      "Bowling afsluiter met zeer lange mockbeschrijving voor maximale tekstdruk. " +
      longMockDescription,
  },
];

export default events;
