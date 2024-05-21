"use server";

import { headers } from "next/headers";

export async function getReferer() {
  const headersList = headers();
  const referer: string | null = headersList.get("referer");
  console.log("headerListGet動いてる");
  console.log("referer", referer);
  return referer;
}
