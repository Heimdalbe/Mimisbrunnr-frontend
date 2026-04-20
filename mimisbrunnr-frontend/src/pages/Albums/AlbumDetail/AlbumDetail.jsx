import { useParams } from "react-router";
import useSWR from "swr";
import { getAll } from "../../../api";

import AsyncData from "../../../components/Common/AsyncData/AsyncData";
import PrimaryButton from "../../../components/Common/PrimaryButton/PrimaryButton";
import ImageGrid from "../../../components/Common/ImageGrid/ImageGrid";
import "./AlbumDetail.css";


const AlbumDetail = () => {
  const { id } = useParams();
  const { data = [], error, isLoading } = useSWR(`albums/pub/${id}`, getAll);

  const d = new Date(data.date);
  const day = d.getDate().toString();
  const month = d.toLocaleString("nl-BE", { month: "long" });
  const year = d.getFullYear();

  return (
    <div className="container-sm-tm">
      <AsyncData error={error} loading={isLoading}>
        <div className="album-wrapper">
          {/* TODO: Terug knop of breadcrumbs (of allebei :p) */}
          <h1>{data.name}</h1>
          <h2>{day} {month} {year}</h2>
          {data.description ? <p>{data.description}</p> : <></>}
          <ImageGrid images={data.images} />
          <div>
            <PrimaryButton text="Terug naar alle albums" isLight={true} to={"../albums"} />
          </div>
        </div>
      </AsyncData>
    </div>
  );
};

export default AlbumDetail;
