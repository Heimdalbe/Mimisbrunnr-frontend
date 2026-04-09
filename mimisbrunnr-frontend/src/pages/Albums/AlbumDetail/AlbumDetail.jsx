import { useParams } from "react-router";
import useSWR from "swr";
import { getAll } from "../../../api";
import "./AlbumDetail.css";
import AsyncData from "../../../components/Common/AsyncData/AsyncData";
import PrimaryButton from "../../../components/Common/PrimaryButton/PrimaryButton"

function getLayoutGroups(n) {
  const LAYOUTS = [7, 5, 3, 2, 1]
  const result = [];
  let remaining = n;
  let lastUsed = null;

  while (remaining > 0) {
    let candidates = LAYOUTS.filter(l => l <= remaining && l != lastUsed);

    let layout = candidates.find(l => remaining - l == 0)

    if (!layout)
      layout = candidates.find(l => l <= remaining);

    result.push(layout);
    remaining -= layout;
    lastUsed = layout;
  }

  if (result.length > 2)
    result.splice(1, 0, result.pop());

  return result;
}

const AlbumDetail = () => {
  const { id } = useParams();
  const { data = [], error, isLoading } = useSWR(`albums/pub/${id}`, getAll);

  const d = new Date(data.date);
  const day = d.getDate().toString();
  const month = d.toLocaleString("nl-BE", { month: "long" });
  const year = d.getFullYear();

  const images = data.images;
  const layouts = getLayoutGroups(images?.length ?? 0);
  const diffs = [];
  var prev = 0;

  for (let i = 0; i < layouts.length; i++) {
    let imgs = [];

    images.slice(prev, prev + layouts[i]).forEach((img, j) => imgs.push(
      <a key={j} href={img.url} style={{ gridArea: '_' + i }} >
        <img src={img.url} alt={img.description} loading="lazy" />
      </a>
    ));

    prev += layouts[i];

    diffs.push(
      <div key={i} className={"layout-" + layouts[i]}>
        {imgs}
      </div>
    );
  }

  return (
    <div className="container-sm-tm">
      <AsyncData error={error} loading={isLoading}>
        <div className="album-wrapper">
          {/* TODO: Terug knop of breadcrumbs (of allebei :p) */}
          <h1>{data.name}</h1>
          <h2>{day} {month} {year}</h2>
          {data.description ? <p>{data.description}</p> : <></>}
          <div className="grid">
            {diffs}
          </div>
          <div>
            <PrimaryButton text="Terug naar alle albums" isLight={true} to={"../albums"} />
          </div>
        </div>
      </AsyncData>
    </div>
  );
};

export default AlbumDetail;
