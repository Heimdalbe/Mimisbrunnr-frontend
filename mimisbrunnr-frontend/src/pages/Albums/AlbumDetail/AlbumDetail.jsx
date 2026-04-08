import { useParams } from "react-router";
import albums from "../../../api/albums";
import "./AlbumDetail.css";

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

  console.log(result)

  if (result.length > 2)
    result.splice(1, 0, result.pop());

  console.log(result)

  return result;
}

const AlbumDetail = () => {
  const { id } = useParams();
  const album = albums[id - 1];

  const d = new Date(album.date);
  const day = d.getDate().toString();
  const month = d.toLocaleString("nl-BE", { month: "long" });
  const year = d.getFullYear();

  const images = album.images;
  const layouts = getLayoutGroups(images?.length ?? 0);
  const diffs = [];
  var prev = 0;

  for (let i = 0; i < layouts.length; i++) {
    let imgs = [];

    console.log(prev, layouts[i], layouts, images.length)

    images.slice(prev, prev + layouts[i]).forEach((img, i) => imgs.push(<img style={{ "grid-area": '_' + i }} src={img.url}></img>));

    prev += layouts[i];

    diffs.push(
      <div className={"layout-" + layouts[i]}>
        {imgs}
      </div>
    );
  }

  return (
    <div className="container-sm-tm">
      <div className="album-wrapper">
        {/* TODO: Terug knop of breadcrumbs (of allebei :p) */}
        <h1>{album.name}</h1>
        <h2>{day} {month} {year}</h2>
        {album.description ? <p>{album.description}</p> : <></>}
        <div className="grid">
          {diffs}
        </div>
      </div>
    </div>
  );
};

export default AlbumDetail;
