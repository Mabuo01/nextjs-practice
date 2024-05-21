import Image from "next/image";

import Link from "next/link";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import FilterComponent from "./_componets/FilterComponent";

export default function Home() {
  const cookieStore = cookies();
  const path = cookieStore.get("path");
  const headersList = headers();
  console.log("headerList動いてる");
  const headerEntries = headersList.entries();
  const referer = headersList.get("referer");

  return (
    <main className="">
      <div>Home</div>
      <div>Referer: {referer}</div>
      <Link href="/about">Link: About</Link>
      <hr />
      <Link href="/detail">Link: Detail</Link>
      <hr />
      <a href="/about">About</a>
      <a href="/detail">Detail</a>
      <div>
        {Array.from(headerEntries).map(([key, value], index) => (
          <li key={index}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
        <ul>Cookie(name): {path?.name}</ul>
        <ul>Cookie(value): {path?.value}</ul>
      </div>

      <FilterComponent />
    </main>
  );
}
