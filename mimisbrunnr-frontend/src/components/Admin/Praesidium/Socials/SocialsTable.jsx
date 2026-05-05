import { useEffect, useState } from "react";
import Social from "./Social";

const SocialsTable = ({ memberId, socials = [], mutate }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Url</th>
          <th>type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          socials.map((s) =>
            <Social key={s.id} memberId={memberId} id={s.id} url={s.url} type={s.type?.name} mutate={mutate} />
          )
        }
      </tbody>
    </table>
  )
}

export default SocialsTable;