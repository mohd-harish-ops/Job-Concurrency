import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NextStarter",
    template: "%s | NextStarter",
  },
  description: "A clean Next.js starter app with App Router, TypeScript and a working todo page.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="page">
          <div className="container">{children}</div>
        </div>
        <footer className="footer">
          <div className="container">Built with Next.js, React and TypeScript</div>
        </footer>
      </body>
    </html>
  );
}
