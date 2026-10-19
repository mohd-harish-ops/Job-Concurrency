import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="prose">
      <h1 className="title">About</h1>
      <p className="subtitle">Is project ka structure aur kaise chalana hai.</p>

      <h2>Folder structure</h2>
      <ul>
        <li><code>app/page.tsx</code> : Home page (<code>/</code>)</li>
        <li><code>app/todos/page.tsx</code> : Todos page (<code>/todos</code>)</li>
        <li><code>app/api/health/route.ts</code> : API endpoint (<code>/api/health</code>)</li>
        <li><code>app/components/</code> : Navbar aur TodoApp components</li>
        <li><code>app/globals.css</code> : Poore app ki styling</li>
      </ul>

      <h2>Commands</h2>
      <ul>
        <li><code>npm run dev</code> : development server</li>
        <li><code>npm run build</code> : production build</li>
        <li><code>npm start</code> : production server</li>
      </ul>
    </div>
  );
}
