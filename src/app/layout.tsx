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
          <footer className="w-full border-t border-zinc-200 bg-zinc-50">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 text-sm text-zinc-600 md:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold text-zinc-900">Navigation</h2>
                <nav aria-label="Navigation principale" className="mt-4 flex flex-col gap-2">
                  <Link href="/" className="hover:text-zinc-900 hover:underline">Accueil</Link>
                  <Link href="/#projets" className="hover:text-zinc-900 hover:underline">Projets</Link>
                  <a href="https://contact.arthurp.fr" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 hover:underline">Contact</a>
                </nav>
              </div>

              <div>
                <h2 className="text-base font-semibold text-zinc-900">ArthurP.fr</h2>
                <div className="mt-4 flex flex-col gap-2">
                  <a href="https://arthurp.fr" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 hover:underline">arthurp.fr</a>
                  <a href="https://github.com/arthur-pbty" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 hover:underline">GitHub</a>
                  <a href="mailto:contact@arthurp.fr" className="hover:text-zinc-900 hover:underline">contact@arthurp.fr</a>
                  <a href="https://contact.arthurp.fr" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 hover:underline">contact.arthurp.fr</a>
                </div>
              </div>

              <div>
                <h2 className="text-base font-semibold text-zinc-900">Légal</h2>
                <nav aria-label="Liens légaux" className="mt-4 flex flex-col gap-2">
                  <Link href="/legal/mentions-legales" className="hover:text-zinc-900 hover:underline">Mentions légales</Link>
                  <Link href="/legal/confidentialite" className="hover:text-zinc-900 hover:underline">Confidentialité</Link>
                  <Link href="/legal/cgu" className="hover:text-zinc-900 hover:underline">CGU</Link>
                </nav>
              </div>
            </div>

            <div className="border-t border-zinc-200 px-6 py-5 text-center text-sm text-zinc-500">
              <p>© {new Date().getFullYear()} Arthur P. Tous droits réservés.</p>
              <p className="mt-1">Fait avec passion et auto-hébergé sur Proxmox.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
