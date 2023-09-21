import React from "react";
import { volumes } from "../../lib/data.js";
import Link from "next/link.js";

export default function TheFellowshipOfTheRing() {
  return (
    <div>
      {" "}
      <Link href="/volumes">← All Volumes</Link>
      <h1>Title {volumes[0].title}</h1>
      <p>{volumes[0].description}</p>
      {volumes.map(({ slug }) => {
        slug === "the-fellowship-of-the-ring";
      })}
      <ul>
        <li>{volumes[0].books[0].ordinal}</li>
        <li> {volumes[0].books[0].title}</li>
      </ul>
    </div>
  );
}
