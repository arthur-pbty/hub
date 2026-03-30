import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FormCraft – Créez des formulaires sans inscription | ArthurP.fr",
  description: "Générez des formulaires en ligne sans inscription ni collecte de données personnelles. Alternative simple et rapide à Google Forms.",
  alternates: { canonical: "https://arthurp.fr/projets/formcraft" },
  openGraph: {
    title: "FormCraft – Créez des formulaires sans inscription",
    description: "Générez des formulaires en ligne sans inscription. Alternative simple à Google Forms.",
    url: "https://arthurp.fr/projets/formcraft",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function FormCraftInfo() {
  return (
    <ProjectInfoPage
      title="FormCraft"
      description="Générez des formulaires en ligne sans inscription ni collecte de données personnelles. Alternative simple et rapide à Google Forms."
      longDescription="FormCraft est un outil de création de formulaires en ligne qui met la simplicité et la confidentialité au premier plan. Aucune inscription n'est requise, aucune donnée personnelle n'est collectée. Créez votre formulaire en quelques clics, partagez-le via un lien unique et recevez les réponses directement. Idéal pour les enquêtes rapides, les sondages, les inscriptions ou les retours d'expérience, FormCraft se positionne comme une alternative légère et respectueuse de la vie privée face à Google Forms."
      features={[
        "Création de formulaires sans inscription ni compte",
        "Aucune collecte de données personnelles",
        "Partage via un lien unique généré automatiquement",
        "Plusieurs types de champs : texte, choix multiple, cases à cocher…",
        "Consultation des réponses en temps réel",
        "Interface intuitive et responsive",
        "Alternative respectueuse de la vie privée à Google Forms",
      ]}
      useCases={[
        "Créer un sondage rapide pour sa communauté",
        "Organiser des inscriptions à un événement",
        "Collecter des retours d'expérience de manière anonyme",
        "Réaliser une enquête sans dépendre d'un compte Google",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"]}
      faq={[
        { question: "FormCraft est-il vraiment sans inscription ?", answer: "Oui, vous pouvez créer et partager un formulaire sans jamais créer de compte. Vous recevez un lien d'administration pour gérer votre formulaire." },
        { question: "Les réponses sont-elles stockées de manière sécurisée ?", answer: "Oui, les réponses sont stockées de manière sécurisée et ne sont accessibles que via votre lien d'administration." },
        { question: "Peut-on exporter les réponses ?", answer: "Oui, les réponses peuvent être exportées pour une analyse plus approfondie." },
        { question: "Combien de réponses peut-on recevoir ?", answer: "Il n'y a pas de limite sur le nombre de réponses que vous pouvez recevoir pour un formulaire." },
      ]}
      images={["/placeholder-formcraft.webp", "/placeholder-formcraft-2.webp", "/placeholder-formcraft-3.webp"]}
      url="https://form.arthurp.fr/"
    />
  );
}
