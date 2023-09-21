import React from "react";
import { volumes } from "../../lib/data.js";
import Link from "next/link.js";

export default function TheFellowshipOfTheRing() {
  return (
    <div>
      {" "}
      <Link href="/volumes">← All Volumes</Link>
      <h1>Title {volumes.title}</h1>
      {volumes.map(({ slug, title, description, cover }) => {
        <>
          <h1>{title}</h1>
          <p>{description}</p>
          <ul>
            <li></li>
          </ul>
        </>;
      })}
    </div>
  );
}
