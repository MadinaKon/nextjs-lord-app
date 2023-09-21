import React from "react";
import Link from "next/link";
import { volumes } from "../../lib/data.js";

export default function index() {
  return (
    <>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
      </ul>
      {/* <ul>
        {volumes.map(({ slug }) => (
          <li key={slug}>
            <Link href={slug}>{slug}</Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}
