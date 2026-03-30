import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QCU Physique-Chimie – Révise avec 150+ QCU | ArthurP.fr",
  description: "Révise la physique-chimie avec plus de 150 QCU configurables et corrigés. Mode aléatoire, filtrage des questions, réponses détaillées.",
  alternates: { canonical: "https://arthurp.fr/projets/qcu" },
  openGraph: {
    title: "QCU Physique-Chimie – 150+ QCU corrigés",
    description: "Révise la physique-chimie avec plus de 150 QCU configurables et corrigés.",
    url: "https://arthurp.fr/projets/qcu",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function QCUInfo() {
  return (
    <ProjectInfoPage
      title="QCU Physique-Chimie"
      description="Révise la physique-chimie avec plus de 150 QCU configurables et corrigés. Mode aléatoire, filtrage des questions, réponses détaillées."
      longDescription="QCU Physique-Chimie est une plateforme de révision interactive dédiée aux élèves de lycée. Elle propose plus de 150 questions à choix unique (QCU) couvrant les principaux chapitres du programme de physique-chimie. Chaque question est accompagnée d'une correction détaillée pour comprendre la bonne réponse et progresser. L'outil permet de filtrer les questions par thème, de les mélanger aléatoirement et de suivre sa progression."
      features={[
        "Plus de 150 QCU couvrant le programme de physique-chimie",
        "Mode aléatoire pour varier les révisions à chaque session",
        "Filtrage par chapitre ou thématique (mécanique, chimie, optique…)",
        "Corrections détaillées avec explications pédagogiques",
        "Interface épurée et rapide, sans distraction",
        "Accessible sur mobile pour réviser partout",
      ]}
      useCases={[
        "Réviser avant un contrôle ou un examen de physique-chimie",
        "S'entraîner régulièrement avec des questions variées",
        "Identifier ses lacunes grâce aux corrections détaillées",
        "Compléter ses cours avec un outil de pratique interactive",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
      faq={[
        { question: "Pour quel niveau sont les QCU ?", answer: "Les QCU sont principalement conçus pour les élèves de lycée (seconde, première, terminale) suivant le programme français de physique-chimie." },
        { question: "Les questions sont-elles régulièrement mises à jour ?", answer: "Oui, de nouvelles questions sont ajoutées régulièrement pour enrichir la base et couvrir davantage de chapitres." },
        { question: "Peut-on utiliser l'outil sur smartphone ?", answer: "Absolument, l'interface est responsive et s'adapte parfaitement aux écrans de téléphone et tablette." },
      ]}
      images={["/placeholder-qcu.webp", "/placeholder-qcu-2.webp", "/placeholder-qcu-3.webp"]}
      url="https://qcu.arthurp.fr"
    />
  );
}
