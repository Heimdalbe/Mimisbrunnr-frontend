import useSWR from 'swr';
import LoadingImage from '../LoadingImage/LoadingImage';
import './DiscordInvite.css';

const inviteUrl = 'https://discord.com/api/v10/invites/6ZsU4wHqZ3?with_counts=true';
const inviteLink = 'https://discord.heimdal.be';
const fallbackIcon = '/Schild1.webp';
const cacheDuration = 5 * 60 * 1000;
const formatCount = new Intl.NumberFormat('nl-BE');

async function fetchInvite(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
  if (!response.ok) throw new Error('Discord invite unavailable');
  return response.json();
}

export default function DiscordInvite() {
  const { data, isLoading } = useSWR(inviteUrl, fetchInvite, {
    dedupingInterval: cacheDuration,
    refreshInterval: cacheDuration,
    shouldRetryOnError: false,
  });
  const guild = data?.guild;
  const icon = guild?.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=128` : fallbackIcon;
  const { approximate_presence_count: online, approximate_member_count: members } = data ?? {};
  const hasCounts = Number.isInteger(online) && Number.isInteger(members);

  return (
    <div className="discord-invite">
      <LoadingImage className="discord-invite-icon" src={icon} fallbackSrc={fallbackIcon}
        width={64} height={64} loading="eager" />
      <strong>{guild?.name ?? 'Heimdal'}</strong>
      <div className="discord-invite-counts">
        {hasCounts ? (
          <>
            <span className="discord-invite-online">{formatCount.format(online)} online</span>
            <span className="discord-invite-members">{formatCount.format(members)} leden</span>
          </>
        ) : (
          <span>{isLoading ? 'Ledenstatistieken laden…' : 'Ledenstatistieken tijdelijk niet beschikbaar'}</span>
        )}
      </div>
      <a className="discord-invite-join" href={inviteLink} target="_blank" rel="noreferrer">
        Join onze Discord
      </a>
    </div>
  );
}
