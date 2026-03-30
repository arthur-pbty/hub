import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linktree – Tous mes liens et réseaux | ArthurP.fr",
  description: "Tous mes réseaux et liens importants, centralisés pour ma communauté. Facile à partager et à mettre à jour.",
  alternates: { canonical: "https://arthurp.fr/projets/links" },
  openGraph: {
    title: "Linktree – Tous mes liens et réseaux",
    description: "Tous mes réseaux et liens importants, centralisés pour ma communauté.",
    url: "https://arthurp.fr/projets/links",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function LinksInfo() {
  return (
    <ProjectInfoPage
      title="Linktree"
      description="Tous mes réseaux et liens importants, centralisés pour ma communauté. Facile à partager et à mettre à jour."
      longDescription="Linktree par ArthurP regroupe tous les liens importants en une seule page. Réseaux sociaux, projets, outils et ressources : tout est centralisé et accessible depuis un lien unique. Parfait pour partager sa présence en ligne dans une bio Instagram, un profil Discord ou une signature email. La page est mise à jour en temps réel et s'adapte à tous les écrans."
      features={[
        "Tous les liens importants regroupés sur une seule page",
        "Design épuré et responsive (mobile, tablette, desktop)",
        "Mise à jour en temps réel sans rechargement",
        "Chargement ultra-rapide",
        "Lien unique facile à partager partout",
      ]}
      useCases={[
        "Partager une page de liens dans sa bio Instagram ou TikTok",
        "Centraliser ses réseaux sociaux pour sa communauté Discord",
        "Ajouter un lien unique dans une signature email",
        "Présenter ses projets à un recruteur ou un collaborateur",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
      faq={[
        { question: "Puis-je créer mon propre Linktree avec cet outil ?", answer: "Cette page est le Linktree personnel d'ArthurP. Si vous souhaitez un outil similaire, vous pouvez vous inspirer du projet ou utiliser des services dédiés." },
        { question: "Les liens sont-ils toujours à jour ?", answer: "Oui, la page est mise à jour régulièrement pour refléter les derniers projets et réseaux d'ArthurP." },
      ]}
      images={["/placeholder-linktree.webp", "/placeholder-linktree-2.webp", "/placeholder-linktree-3.webp"]}
      url="https://links.arthurp.fr"
    />
  );
}
