import { useNavigate, useParams } from 'react-router';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { getAll, put } from '../../../api';
import AsyncData from '../../../components/Common/AsyncData/AsyncData';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import { useEffect, useState } from 'react';

const AdminEventSponsors = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data: event = {}, error: eventError, isLoading: eventLoading } = useSWR(`events/${id}`, getAll);

  const {
    data: sponsorData = { sponsors: [] },
    error: sponsorError,
    isLoading: sponsorLoading,
  } = useSWR('sponsors', getAll);

  const { trigger: handleSave, isMutating: isSaving } = useSWRMutation(`events/${id}`, put);

  const [selectedSponsors, setSelectedSponsors] = useState([]);

  const sponsors = sponsorData.sponsors || [];

  useEffect(() => {
    if (event) {
      setSelectedSponsors(event.sponsors?.map((sponsor) => sponsor.id) || []);
    }
  }, [event]);

  function handleSponsorChange(sponsorId) {
    setSelectedSponsors((current) => {
      if (current.includes(sponsorId)) {
        return current.filter((id) => id !== sponsorId);
      }

      return [...current, sponsorId];
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await handleSave({
      sponsorIds: selectedSponsors,
    });

    navigate('/admin/events');
  }

  return (
    <div className="container">
      <AsyncData loading={eventLoading || sponsorLoading} error={eventError || sponsorError}>
        {event && (
          <>
            <Breadcrumbs
              children={[
                { link: 'admin' },
                { link: 'events' },
                {
                  link: `${event.name} > Sponsors`,
                  isLast: true,
                },
              ]}
            />

            <h1>{event.name} - Sponsors</h1>

            <form onSubmit={handleSubmit}>
              {sponsors.length === 0 ? (
                <p>Er zijn nog geen sponsors.</p>
              ) : (
                <div className="sponsor-list">
                  {sponsors.map((sponsor) => (
                    <label key={sponsor.id}>
                      <div>
                        <input
                          type="checkbox"
                          checked={selectedSponsors.includes(sponsor.id)}
                          onChange={() => handleSponsorChange(sponsor.id)}
                        />
                        <span>{sponsor.name}</span>
                        {sponsor.logo?.url && <img src={sponsor.logo.url} alt={sponsor.name} style={{ width: 50 }} />}
                      </div>
                    </label>
                  ))}
                </div>
              )}

              <button type="submit" disabled={isSaving}>
                {isSaving ? 'Opslaan...' : 'Sponsors opslaan'}
              </button>
            </form>
          </>
        )}
      </AsyncData>
    </div>
  );
};

export default AdminEventSponsors;
