import React from "react";
import Link from "next/link";
import { volumes } from "../../lib/data.js";

export default function TheTwoTowers() {
  return (
    <div>
      {" "}
      <Link href="/volumes">← All Volumes</Link>
      <div>
        {" "}
        <h1>Title {volumes[2].title}</h1>
        <p>{volumes[2].description}</p>
        {volumes.map(({ slug }) => {
          slug === "the-fellowship-of-the-ring";
        })}
        <ul>
          <li>{volumes[2].books[0].ordinal}</li>
          <li> {volumes[2].books[0].title}</li>
        </ul>
      </div>
    </div>
  );
}
