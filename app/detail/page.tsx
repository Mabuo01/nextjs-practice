import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>Detail</div>
      <Link href="/">Link: Home</Link>
      <hr />
      <Link href="/about">Link: About</Link>
      <hr />
      <a href="/">Home</a>
      <a href="/about">About</a>
    </>
  );
}
