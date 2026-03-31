import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio – Site personnel d'ArthurP | ArthurP.fr",
  description: "Découvrez le portfolio personnel d'Arthur : développeur passionné par l'auto-hébergement et l'infrastructure, et sportif de haut niveau en voile.",
  alternates: { canonical: "https://arthurp.fr/projets/portfolio" },
  openGraph: {
    title: "Portfolio – Site personnel d'ArthurP",
    description: "Portfolio de développeur et navigateur passionné par l'auto-hébergement, l'infrastructure et la voile.",
    url: "https://arthurp.fr/projets/portfolio",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function PortfolioInfo() {
  return (
    <ProjectInfoPage
      title="Portfolio ArthurP"
      description="Le site personnel d'Arthur : développeur passionné par l'auto-hébergement et navigateur de haut niveau en voile."
      longDescription="Le portfolio d'Arthur est son site vitrine personnel. Il présente son parcours de développeur passionné par l'auto-hébergement et l'infrastructure, mais aussi son côté sportif en tant que navigateur de haut niveau en voile. Le site regroupe ses projets techniques, ses installations homelab, sa galerie de photos de voile et de navigation, et un formulaire de contact. Le design moderne alterne entre mode clair et sombre, avec une présentation élégante sur fond sombre."
      features={[
        "Présentation personnelle et parcours de développeur",
        "Section Projets avec tous les projets récents",
        "Section Homelab sur l'infrastructure auto-hébergée",
        "Parcours en voile et compétitions nautiques",
        "Galerie de photos",
        "Formulaire de contact",
        "Mode clair/sombre",
      ]}
      useCases={[
        "Découvrir les projets et compétences d'Arthur",
        "Prendre contact pour une collaboration",
        "Explorer son parcours en voile de compétition",
        "S'inspirer pour son propre portfolio de développeur",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
      faq={[
        { question: "Comment contacter Arthur ?", answer: "Le portfolio dispose d'un formulaire de contact dans la section 'Contact' en bas de page." },
        { question: "Quels projets Arthur développe-t-il ?", answer: "Arthur développe des outils web (générateurs, bots Discord, apps de productivité), des solutions d'auto-hébergement et des projets d'infrastructure." },
        { question: "Qu'est-ce que le Homelab ?", answer: "Le Homelab est l'infrastructure serveur personnelle d'Arthur, hébergée physiquement chez lui, sur laquelle il fait tourner ses propres services." },
      ]}
      images={["/placeholder-portfolio.webp", "/placeholder-portfolio-2.webp", "/placeholder-portfolio-3.webp"]}
      url="https://portfolio.arthurp.fr"
      githubUrl="https://github.com/arthur-pbty/portfolio"
    />
  );
}
