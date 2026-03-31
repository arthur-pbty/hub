import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moon Phases – Phases lunaires et calendrier | ArthurP.fr",
  description: "Explorez les phases de la lune en temps réel : phase actuelle, prochaine pleine lune, calendrier lunaire, simulateur et quiz.",
  alternates: { canonical: "https://arthurp.fr/projets/moon" },
  openGraph: {
    title: "Moon Phases – Phases lunaires et calendrier",
    description: "Suivez les phases de la lune, consultez le calendrier lunaire et découvrez les traditions liées aux pleines lunes.",
    url: "https://arthurp.fr/projets/moon",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function MoonInfo() {
  return (
    <ProjectInfoPage
      title="Moon Phases"
      description="Explorez les phases de la lune en temps réel : phase actuelle, prochaine pleine lune, calendrier lunaire, simulateur et quiz."
      longDescription="Moon Phases est une application complète dédiée aux phases lunaires. Elle affiche la phase actuelle de la lune (pourcentage d'illumination, nom de la phase) et indique la prochaine pleine lune avec son nom traditionnel. Le calendrier lunaire visualise toutes les phases du mois, tandis que le simulateur permet d'explorer les phases de n'importe quelle date. Des articles éducatifs et un quiz permettent d'approfondir ses connaissances sur les cycles lunaires et les traditions culturelles qui leur sont associées."
      features={[
        "Phase lunaire actuelle avec pourcentage d'illumination",
        "Prochaine pleine lune avec nom traditionnel et date",
        "Calendrier lunaire mensuel interactif",
        "Simulateur de phases pour n'importe quelle date",
        "Articles éducatifs sur les traditions lunaires",
        "Quiz sur les phases de la lune",
        "Disponible en français et en anglais",
      ]}
      useCases={[
        "Suivre les phases de la lune au quotidien",
        "Planifier des événements en fonction du calendrier lunaire",
        "Apprendre les traditions culturelles liées aux pleines lunes",
        "Tester ses connaissances sur la lune avec le quiz",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
      faq={[
        { question: "Comment l'application calcule-t-elle les phases lunaires ?", answer: "L'application utilise des algorithmes astronomiques précis basés sur les cycles lunaires pour calculer la phase actuelle et les phases futures à partir de la date système." },
        { question: "Qu'est-ce que le simulateur de phases ?", answer: "Le simulateur permet d'entrer n'importe quelle date passée ou future et d'afficher la phase lunaire correspondante." },
        { question: "Qu'est-ce qu'une 'Worm Moon' ?", answer: "Les pleines lunes ont des noms traditionnels selon les cultures. 'Worm Moon' est le nom de la pleine lune de mars, signifiant que la nature reprend vie (vers de terre réapparaissent)." },
      ]}
      images={["/placeholder-moon.webp", "/placeholder-moon-2.webp", "/placeholder-moon-3.webp"]}
      url="https://moon.arthurp.fr"
      githubUrl="https://github.com/arthur-pbty/moon"
    />
  );
}
