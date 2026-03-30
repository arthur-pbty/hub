import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les Aventures de Doudou – Album photo interactif | ArthurP.fr",
  description: "Découvrez les aventures de Doudou, un album de photos et d'histoires racontant les péripéties d'un doudou bien-aimé.",
  alternates: { canonical: "https://arthurp.fr/projets/doudou" },
  openGraph: {
    title: "Les Aventures de Doudou – Album photo interactif",
    description: "Un album photo interactif racontant les merveilleuses aventures de Doudou.",
    url: "https://arthurp.fr/projets/doudou",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function DoudouInfo() {
  return (
    <ProjectInfoPage
      title="Les Aventures de Doudou"
      description="Un album photo interactif racontant les merveilleuses aventures de Doudou, avec une vue chronologique ou par albums."
      longDescription="Les Aventures de Doudou est un site personnel et affectif qui retrace les aventures d'un doudou bien-aimé. Chaque aventure est illustrée par des photos et accompagnée d'une courte histoire. Le site propose deux modes de navigation : une vue chronologique qui présente toutes les aventures dans l'ordre du temps, et une vue par albums regroupant les aventures par thème. L'interface propose trois thèmes visuels : Rose, Clair et Sombre."
      features={[
        "Vue chronologique de toutes les aventures",
        "Navigation par albums thématiques",
        "Galerie de photos pour chaque aventure",
        "Trois thèmes : Rose, Clair et Sombre",
        "Interface responsive et ludique",
        "Mode administrateur pour gérer le contenu",
      ]}
      useCases={[
        "Partager des souvenirs sous forme d'album interactif",
        "Créer un journal de bord illustré",
        "Offrir un album numérique personnalisé",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
      faq={[
        { question: "Qui est Doudou ?", answer: "Doudou est un doudou (jouet en peluche) dont les aventures sont illustrées et racontées sur ce site." },
        { question: "Puis-je ajouter mes propres aventures ?", answer: "Le site dispose d'un mode administrateur permettant d'ajouter et gérer les aventures." },
        { question: "Le site est-il adapté aux mobiles ?", answer: "Oui, le site est entièrement responsive et s'adapte aux smartphones, tablettes et ordinateurs." },
      ]}
      images={["/placeholder-doudou.webp", "/placeholder-doudou-2.webp", "/placeholder-doudou-3.webp"]}
      url="https://doudou.arthurp.fr"
    />
  );
}
