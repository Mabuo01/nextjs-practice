import { headers } from "next/headers";
import Link from "next/link";
import Button from "./_components/Button";

import LocalStorageComponent from "./_components/LocalStorageComponent";

function IP() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

export default function Page() {
  const headersList = headers();
  const referer = headersList.get("referer");
  console.log("headerList動いてるAbout");

  return (
    <>
      <div>About</div>
      <div>Referer: {referer}</div>
      <Link href="/">Link: Home</Link>
      <Link href="/detail">Link: Detail</Link>
      <hr />
      <a href="/">Home</a>
      <LocalStorageComponent></LocalStorageComponent>
      <IP />
      <div></div>
      <Button></Button>
    </>
  );
}
