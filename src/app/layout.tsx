import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArthurP.fr – Hub de projets et outils",
  description: "Découvre tous les outils, bots Discord, QCM, générateurs et ressources créés par ArthurP. Un point d’accès unique pour tout ce que je développe et partage.",
  metadataBase: new URL("https://arthurp.fr"),
  openGraph: {
    title: "ArthurP.fr – Hub de projets et outils",
    description: "Découvre tous les outils, bots Discord, QCM, générateurs et ressources créés par ArthurP.",
    url: "https://arthurp.fr",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArthurP.fr – Hub de projets et outils",
    description: "Découvre tous les outils, bots Discord, QCM, générateurs et ressources créés par ArthurP.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ArthurP.fr",
            url: "https://arthurp.fr",
            description:
              "Découvre tous les outils, bots Discord, QCM, générateurs et ressources créés par ArthurP.",
            inLanguage: "fr-FR",
            author: {
              "@type": "Person",
              name: "ArthurP",
              url: "https://arthurp.fr",
            },
          }}
        />
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <footer className="w-full border-t border-zinc-200 bg-zinc-50 py-4 text-center text-sm text-zinc-500">
            <nav aria-label="Liens légaux" className="flex flex-wrap justify-center gap-4">
              <Link href="/legal/mentions-legales" className="hover:underline">Mentions légales</Link>
              <Link href="/legal/confidentialite" className="hover:underline">Confidentialité</Link>
              <Link href="/legal/cgu" className="hover:underline">CGU</Link>
            </nav>
            <div className="mt-2">© {new Date().getFullYear()} ArthurP</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
