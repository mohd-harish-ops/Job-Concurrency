import Link from "next/link";

const features = [
  { icon: "⚡", title: "App Router", text: "Folder-based routing: har folder ka page.tsx ek URL banta hai." },
  { icon: "🧩", title: "Server + Client components", text: "Pages server par render hote hain, interactive hisse client component me." },
  { icon: "🔌", title: "API routes", text: "Backend endpoint bina alag server ke, jaise /api/health." },
  { icon: "🌗", title: "Dark mode", text: "System ke theme ke hisaab se light/dark apne aap badalta hai." },
  { icon: "📱", title: "Responsive", text: "Mobile aur desktop dono par achha dikhta hai." },
  { icon: "🛡️", title: "TypeScript", text: "Strict typing se galtiyan code likhte waqt hi pakad me aati hain." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="badge">Next.js 15 · TypeScript</span>
        <h1>
          Ek clean aur <em>fast</em> Next.js starter
        </h1>
        <p>
          Routing, API route, client-side state aur modern design ek jagah. Todos page try karo, ye
          bina database ke browser me data save karta hai.
        </p>
        <div className="hero-actions">
          <Link href="/todos" className="btn">
            Todos kholo
          </Link>
          <Link href="/about" className="btn btn-outline">
            About
          </Link>
        </div>
      </section>

      <section className="grid" aria-label="Features">
        {features.map((f) => (
          <article key={f.title} className="card">
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
