export const EVENT_ROLES = {
  Feut: 'Geïnteresseerde (standaardrol).',
  Heimie: 'Betaald lidmaatschap.',
  Schacht: 'Gedoopt; ook de Heimie-rol vereist.',
  Commilitones: 'Ontgroend; ook de Heimie-rol vereist.',
};

export function eventAllowedRoles(event) {
  if (event.allowedRoles) return event.allowedRoles;
  if (event.accessibility === 'CLOSED') return ['Schacht', 'Commilitones'];
  if (event.accessibility === 'HEIMIES') return ['Heimie'];
  return [];
}

export function eventAudienceLabel(event) {
  const roles = eventAllowedRoles(event);
  if (roles.length === 0) return 'Iedereen welkom';
  const labels = {
    Feut: 'Feuten', Heimie: 'Heimies',
    Schacht: 'Schachten + Heimie', Commilitones: 'Commilitones + Heimie',
  };
  return roles.map((role) => labels[role] ?? role).join(' of ');
}
