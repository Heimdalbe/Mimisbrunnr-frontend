export default function errorMessage(error, fallback = 'Opslaan mislukt. Probeer het opnieuw.') {
  const body = error.response?.data;
  const validation = body?.validationErrors?.map((item) => item.errorMessage);
  const errors = Array.isArray(body?.errors) ? body.errors : Object.values(body?.errors ?? {}).flat();
  return [...(validation ?? []), ...errors].join(' ') || fallback;
}
