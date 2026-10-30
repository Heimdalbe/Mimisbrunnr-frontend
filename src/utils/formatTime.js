const formatter = new Intl.DateTimeFormat('nl-BE', {
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

export default function formatTime(value) {
  const date = new Date(value);
  return value == null || Number.isNaN(date.getTime()) ? '' : formatter.format(date);
}
