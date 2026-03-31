import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FocusPomodoro – Timer Pomodoro en ligne | ArthurP.fr",
  description: "Boostez votre productivité avec la technique Pomodoro : sessions de focus de 25 minutes, pauses, statistiques quotidiennes et gestion de tâches.",
  alternates: { canonical: "https://arthurp.fr/projets/pomodoro" },
  openGraph: {
    title: "FocusPomodoro – Timer Pomodoro en ligne",
    description: "Restez concentré et productif grâce au timer Pomodoro avec statistiques et gestion des tâches.",
    url: "https://arthurp.fr/projets/pomodoro",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function PomodoroInfo() {
  return (
    <ProjectInfoPage
      title="FocusPomodoro"
      description="Boostez votre productivité avec la technique Pomodoro : sessions de focus, pauses et statistiques en temps réel."
      longDescription="FocusPomodoro est un timer Pomodoro complet et élégant. La technique Pomodoro consiste à travailler par sessions de 25 minutes (un 'pomodoro') entrecoupées de courtes pauses de 5 minutes, et d'une pause longue de 15 minutes après 4 sessions. L'application suit votre progression quotidienne, compte vos séries et vous permet de gérer una liste de tâches directement depuis l'interface. Son design épuré et ses statistiques détaillées en font un outil idéal pour améliorer sa concentration."
      features={[
        "Timer Pomodoro configurable (25min focus / 5min pause courte / 15min pause longue)",
        "Sessions 1/4 avec objectif journalier de 8 tomates",
        "Statistiques : sessions du jour, total, série actuelle et meilleure série",
        "Gestion de tâches intégrée avec priorités",
        "Thèmes clair et sombre",
        "Aucune inscription requise",
      ]}
      useCases={[
        "Travailler en sessions concentrées sans distraction",
        "Suivre sa productivité au quotidien",
        "Gérer ses tâches et les associer à ses sessions",
        "Construire une habitude de travail régulière",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
      faq={[
        { question: "Qu'est-ce que la technique Pomodoro ?", answer: "La technique Pomodoro consiste à travailler par intervalles de 25 minutes (pomodoros) séparés par des courtes pauses. Après 4 pomodoros, on fait une pause plus longue. Cette méthode améliore la concentration et réduit la fatigue mentale." },
        { question: "L'application sauvegarde-t-elle mes statistiques ?", answer: "Oui, vos statistiques et tâches sont sauvegardées localement dans votre navigateur grâce au localStorage." },
        { question: "Puis-je personnaliser la durée des sessions ?", answer: "Oui, un menu de paramètres permet d'ajuster la durée des sessions de focus et des pauses selon vos préférences." },
      ]}
      images={["/placeholder-pomodoro.webp", "/placeholder-pomodoro-2.webp", "/placeholder-pomodoro-3.webp"]}
      url="https://pomodoro.arthurp.fr"
      githubUrl="https://github.com/arthur-pbty/pomodoro"
    />
  );
}
