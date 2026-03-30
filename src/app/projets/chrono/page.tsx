import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chrono – Chronomètre et minuteur en ligne | ArthurP.fr",
  description: "Chronomètre en ligne avec précision à la milliseconde, enregistrement des tours (laps), minuteur avec préréglages rapides et raccourcis clavier.",
  alternates: { canonical: "https://arthurp.fr/projets/chrono" },
  openGraph: {
    title: "Chrono – Chronomètre et minuteur en ligne",
    description: "Chronomètre professionnel et minuteur flexible, précis à la milliseconde, avec raccourcis clavier et préréglages.",
    url: "https://arthurp.fr/projets/chrono",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ChronoInfo() {
  return (
    <ProjectInfoPage
      title="Chrono"
      description="Chronomètre professionnel et minuteur flexible en ligne, précis à la milliseconde, avec enregistrement des tours et raccourcis clavier."
      longDescription="Chrono est un outil de mesure du temps double en un : un chronomètre haute précision (à la milliseconde) pour mesurer des durées, et un minuteur configurable pour définir des comptes à rebours. Le chronomètre permet d'enregistrer des tours (laps) pour suivre des temps intermédiaires. Le minuteur propose des préréglages rapides (1, 3, 5, 10, 15, 30 minutes) ainsi qu'un réglage manuel. Des raccourcis clavier permettent une utilisation sans souris. L'interface, sobre sur fond sombre, est optimale pour un usage prolongé."
      features={[
        "Chronomètre précis à la milliseconde (heures:minutes:secondes.millisecondes)",
        "Enregistrement des tours (laps) avec temps intermédiaires",
        "Minuteur avec préréglages rapides (1, 3, 5, 10, 15, 30 min)",
        "Réglage manuel des heures, minutes et secondes du minuteur",
        "Raccourcis clavier : Espace (start/pause), L (tour), R (reset), C (copier)",
        "Mode plein écran pour affichage large",
        "Thème clair/sombre",
        "Fonctionne sans inscription",
      ]}
      useCases={[
        "Chronométrer des sessions de sport ou d'entraînement",
        "Mesurer des temps de cuisson ou de préparation",
        "Minuter des présentations ou des prises de parole",
        "Enregistrer des temps de passage (laps) en compétition",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
      faq={[
        { question: "Quelle est la précision du chronomètre ?", answer: "Le chronomètre est précis à la milliseconde, affichant heures, minutes, secondes et millisecondes en temps réel." },
        { question: "Comment enregistrer un tour ?", answer: "Appuyez sur la touche L ou sur le bouton dédié pendant que le chronomètre tourne pour enregistrer un temps intermédiaire (lap)." },
        { question: "Le minuteur peut-il sonner à la fin ?", answer: "Oui, le minuteur émet une alerte sonore ou visuelle à la fin du décompte selon la configuration du navigateur." },
      ]}
      images={["/placeholder-chrono.webp", "/placeholder-chrono-2.webp", "/placeholder-chrono-3.webp"]}
      url="https://chrono.arthurp.fr"
    />
  );
}
