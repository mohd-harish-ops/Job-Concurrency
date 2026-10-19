import Link from "next/link";

export default function NotFound() {
  return (
    <div className="hero">
      <h1>404</h1>
      <p>Ye page nahi mila.</p>
      <Link href="/" className="btn">
        Home par jao
      </Link>
    </div>
  );
}
