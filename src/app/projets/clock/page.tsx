import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clock – Horloge en ligne personnalisable | ArthurP.fr",
  description: "Affichez l'heure en temps réel : horloge analogique ou numérique, personnalisation du thème (clair/sombre/couleurs).",
  alternates: { canonical: "https://arthurp.fr/projets/clock" },
  openGraph: {
    title: "Clock – Horloge en ligne personnalisable",
    description: "Affichez l'heure en temps réel avec une horloge analogique ou numérique personnalisable.",
    url: "https://arthurp.fr/projets/clock",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ClockInfo() {
  return (
    <ProjectInfoPage
      title="Clock"
      description="Affichez l'heure en temps réel : horloge analogique ou numérique, personnalisation du thème (clair/sombre/couleurs)."
      longDescription="Clock est une horloge en ligne élégante et personnalisable. Choisissez entre un affichage analogique classique ou un mode numérique moderne, et adaptez le thème à vos préférences : mode clair, mode sombre ou couleurs personnalisées. L'horloge se met à jour en temps réel avec une précision à la seconde. Idéale pour l'afficher en plein écran sur un second monitor, la garder en onglet de fond ou simplement vérifier l'heure rapidement."
      features={[
        "Affichage en temps réel avec précision à la seconde",
        "Mode analogique (aiguilles) et numérique au choix",
        "Thèmes personnalisables : clair, sombre et couleurs",
        "Mode plein écran pour affichage sur moniteur",
        "Design minimaliste et responsive",
        "Aucune installation ni inscription requise",
      ]}
      useCases={[
        "Afficher l'heure sur un second écran pendant le travail",
        "Utiliser comme horloge de bureau en plein écran",
        "Vérifier l'heure rapidement depuis un onglet navigateur",
        "Personnaliser l'affichage selon l'ambiance de la pièce",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS", "Canvas API"]}
      faq={[
        { question: "L'horloge utilise-t-elle l'heure locale ?", answer: "Oui, l'horloge affiche automatiquement l'heure de votre fuseau horaire détecté par votre navigateur." },
        { question: "Peut-on utiliser Clock en plein écran ?", answer: "Oui, un bouton dédié permet de passer en plein écran pour un affichage optimal sur tout type de moniteur." },
        { question: "L'horloge fonctionne-t-elle hors ligne ?", answer: "Oui, une fois la page chargée, l'horloge fonctionne sans connexion internet puisqu'elle utilise l'heure système." },
      ]}
      images={["/placeholder-clock.webp", "/placeholder-clock-2.webp", "/placeholder-clock-3.webp"]}
      url="https://clock.arthurp.fr"
      githubUrl="https://github.com/arthur-pbty/clock"
    />
  );
}
