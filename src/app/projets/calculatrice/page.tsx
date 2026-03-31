import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculatrice – Calculatrice en ligne simple et scientifique | ArthurP.fr",
  description: "Calculatrice en ligne gratuite avec mode simple et mode scientifique, historique des calculs et thème sombre/clair.",
  alternates: { canonical: "https://arthurp.fr/projets/calculatrice" },
  openGraph: {
    title: "Calculatrice – Calculatrice en ligne simple et scientifique",
    description: "Effectuez vos calculs en ligne avec une calculatrice simple ou scientifique, avec historique et mode sombre.",
    url: "https://arthurp.fr/projets/calculatrice",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function CalculatriceInfo() {
  return (
    <ProjectInfoPage
      title="Calculatrice"
      description="Calculatrice en ligne gratuite avec modes simple et scientifique, historique des calculs et thème sombre ou clair."
      longDescription="La calculatrice en ligne d'ArthurP propose deux modes complémentaires : un mode simple pour les opérations courantes (addition, soustraction, multiplication, division) et un mode scientifique pour les calculs avancés (fonctions trigonométriques, exponentielles, logarithmes, etc.). Un historique des calculs est accessible à tout moment, et l'interface peut être basculée entre mode clair et mode sombre selon les préférences. L'outil fonctionne entièrement dans le navigateur, sans installation."
      features={[
        "Mode simple : opérations arithmétiques courantes",
        "Mode scientifique : fonctions avancées (trig, log, exp...)",
        "Historique des calculs consultable",
        "Thème sombre et thème clair",
        "Support des parenthèses pour les expressions complexes",
        "Aucune installation ni inscription requise",
      ]}
      useCases={[
        "Effectuer des calculs rapides depuis le navigateur",
        "Résoudre des expressions mathématiques complexes",
        "Utiliser les fonctions scientifiques sans installer de logiciel",
        "Consulter l'historique des calculs précédents",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
      faq={[
        { question: "Quelle est la différence entre mode simple et scientifique ?", answer: "Le mode simple propose les 4 opérations de base plus les parenthèses. Le mode scientifique ajoute sin, cos, tan, log, exp, racine carrée et d'autres fonctions mathématiques avancées." },
        { question: "L'historique est-il sauvegardé ?", answer: "L'historique est disponible pendant la session. Pour une sauvegarde permanente, il peut être stocké localement selon la version de l'application." },
        { question: "La calculatrice fonctionne-t-elle sans Internet ?", answer: "Oui, une fois la page chargée, la calculatrice fonctionne entièrement hors ligne." },
      ]}
      images={["/placeholder-calculatrice.webp", "/placeholder-calculatrice-2.webp", "/placeholder-calculatrice-3.webp"]}
      url="https://calculatrice.arthurp.fr"
      githubUrl="https://github.com/arthur-pbty/calculatrice"
    />
  );
}
