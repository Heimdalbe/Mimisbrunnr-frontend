import useSWR from "swr";
import { getAll } from "../../../api";
import AsyncData from "../../../components/Common/AsyncData/AsyncData";
import SponsorGrid from "../../../components/Sponsors/SponsorGrid/SponsorGrid";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

const Sponsors = () => {
  const { data: sponsors = { sponsors: [] }, sponsorError, sponsorsAreLoading } = useSWR('sponsors', getAll);

  return (
    <div className="container-sm-tm">
      <Breadcrumbs children={[{ link: "sponsors", isLast: true }]} />
      <h1>Onze Sponsors</h1>
      <AsyncData loading={sponsorsAreLoading} error={sponsorError}>
        <SponsorGrid sponsors={sponsors.sponsors} />
      </AsyncData>
      <h1>Sponsor worden?</h1>
      <p>
        Wenst u ook sponsor te worden? Of zou u meer te weten willen komen wat een eventuele samenwerking teweeg zou kunnen brengen.
        <br />
        Contacteer ons dan op <a href="mailto:publicrelations@heimdal.be">publicrelations@heimdal.be</a>
      </p>
    </div >
  )
}

export default Sponsors;