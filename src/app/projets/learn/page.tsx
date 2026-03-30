import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn – Réponses claires à vos questions | ArthurP.fr",
  description: "Des réponses claires à des questions populaires sur de nombreux sujets. Idéal pour apprendre rapidement et efficacement.",
  alternates: { canonical: "https://arthurp.fr/projets/learn" },
  openGraph: {
    title: "Learn – Réponses claires à vos questions",
    description: "Des réponses claires à des questions populaires sur de nombreux sujets.",
    url: "https://arthurp.fr/projets/learn",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function LearnInfo() {
  return (
    <ProjectInfoPage
      title="Learn"
      description="Des réponses claires à des questions populaires sur de nombreux sujets. Idéal pour apprendre rapidement et efficacement."
      longDescription="Learn est une plateforme éducative qui fournit des réponses claires, concises et bien structurées à des questions fréquemment posées sur de nombreux sujets. Que ce soit en sciences, technologie, culture générale ou vie quotidienne, chaque réponse est rédigée pour être compréhensible par tous. L'objectif est de permettre à chacun d'apprendre rapidement sans se perdre dans des articles trop longs."
      features={[
        "Réponses claires et concises à des questions populaires",
        "Couverture de nombreux sujets (sciences, tech, culture générale…)",
        "Contenu structuré et facile à lire",
        "Navigation rapide entre les questions",
        "Optimisé pour la lecture sur mobile",
        "Nouveau contenu ajouté régulièrement",
      ]}
      useCases={[
        "Trouver rapidement la réponse à une question de culture générale",
        "Compléter ses connaissances sur un sujet précis",
        "Utiliser comme support de révision rapide",
        "Satisfaire sa curiosité au quotidien",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX"]}
      faq={[
        { question: "Qui rédige les réponses ?", answer: "Les réponses sont rédigées par ArthurP avec un souci de clarté et de précision, en s'appuyant sur des sources fiables." },
        { question: "Peut-on suggérer une question ?", answer: "Oui, les suggestions sont les bienvenues ! Vous pouvez contacter ArthurP via ses réseaux pour proposer un sujet." },
        { question: "Le contenu est-il gratuit ?", answer: "Oui, tout le contenu de Learn est entièrement gratuit et accessible sans inscription." },
      ]}
      images={["/placeholder-learn.webp", "/placeholder-learn-2.webp", "/placeholder-learn-3.webp"]}
      url="https://learn.arthurp.fr"
    />
  );
}
