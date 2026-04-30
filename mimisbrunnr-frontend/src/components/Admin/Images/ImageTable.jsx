import { useEffect, useState } from "react";
import AlbumImage from "./AlbumImage";

const ImageTable = ({ albumId, images = [], mutate }) => {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Url</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            images.map((i) =>
              <AlbumImage key={i.id} albumId={albumId} id={i.id} url={i.url} description={i.description} mutate={mutate} />
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default ImageTable;