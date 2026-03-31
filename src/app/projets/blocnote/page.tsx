import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BlocNote – Prise de notes en ligne | ArthurP.fr",
  description: "Application de prise de notes en ligne simple et rapide : créez, recherchez et organisez vos notes avec mode sombre, sans inscription.",
  alternates: { canonical: "https://arthurp.fr/projets/blocnote" },
  openGraph: {
    title: "BlocNote – Prise de notes en ligne",
    description: "Prenez des notes rapidement en ligne, avec recherche, tri par date et mode sombre. Simple et sans inscription.",
    url: "https://arthurp.fr/projets/blocnote",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function BlocNoteInfo() {
  return (
    <ProjectInfoPage
      title="BlocNote"
      description="Application de prise de notes en ligne simple et rapide : créez, recherchez et organisez vos notes avec mode sombre, sans inscription."
      longDescription="BlocNote est une application de prise de notes très légère et efficace. Son interface à deux panneaux affiche la liste de vos notes sur la gauche et l'éditeur sur la droite. Créez une nouvelle note en un clic (ou avec Ctrl+N), rédigez votre contenu, et retrouvez-la facilement grâce à la barre de recherche. Les notes peuvent être triées par date de création ou modification. Le thème sombre par défaut est reposant pour un usage prolongé, et il existe un thème clair. Toutes les notes sont stockées localement dans votre navigateur."
      features={[
        "Création rapide de notes (bouton + ou Ctrl+N)",
        "Éditeur de texte intégré",
        "Recherche dans les notes en temps réel",
        "Tri des notes par date",
        "Mode sombre et mode clair",
        "Stockage local dans le navigateur (pas de compte)",
        "Interface double panneau liste / éditeur",
      ]}
      useCases={[
        "Prendre des notes rapides pendant le travail",
        "Faire des listes de tâches ou de courses",
        "Garder des mémos et informations temporaires",
        "Alternative légère à des applications de notes complexes",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS", "localStorage"]}
      faq={[
        { question: "Les notes sont-elles sauvegardées automatiquement ?", answer: "Oui, les notes sont sauvegardées automatiquement dans le localStorage de votre navigateur à chaque modification." },
        { question: "Les notes sont-elles synchronisées entre appareils ?", answer: "Non, les notes sont stockées localement sur votre appareil. Pour les retrouver sur un autre appareil, il faudrait les exporter manuellement." },
        { question: "Y a-t-il une limite au nombre de notes ?", answer: "La limite est celle du localStorage de votre navigateur (généralement 5-10 Mo), ce qui permet de stocker un très grand nombre de notes texte." },
      ]}
      images={["/placeholder-blocnote.webp", "/placeholder-blocnote-2.webp", "/placeholder-blocnote-3.webp"]}
      url="https://blocnote.arthurp.fr"
      githubUrl="https://github.com/arthur-pbty/blocnote"
    />
  );
}
