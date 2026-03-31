import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visio – Visioconférence simple et gratuite | ArthurP.fr",
  description: "Créez une salle de visioconférence en un clic et partagez le lien avec vos participants. Aucune inscription requise.",
  alternates: { canonical: "https://arthurp.fr/projets/visio" },
  openGraph: {
    title: "Visio – Visioconférence simple et gratuite",
    description: "Lancez une visioconférence instantanément sans inscription. Partagez un lien et invitez vos participants.",
    url: "https://arthurp.fr/projets/visio",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function VisioInfo() {
  return (
    <ProjectInfoPage
      title="Visio"
      description="Créez une salle de visioconférence en un clic et partagez le lien avec vos participants. Aucune inscription requise."
      longDescription="Visio est une application de visioconférence minimaliste et gratuite. En un seul clic sur 'Nouvelle visio', une salle est créée et un lien unique est généré. Il suffit de le partager avec vos participants pour qu'ils puissent rejoindre la conférence sans aucun compte ni installation. L'interface épurée se concentre sur l'essentiel : la connexion rapide entre personnes."
      features={[
        "Création de salle en un clic, sans inscription",
        "Rejoindre une visio existante via un code de salle",
        "Lien de partage unique généré automatiquement",
        "Interface minimaliste et intuitive",
        "Fonctionne directement dans le navigateur",
        "Gratuit et sans publicité",
      ]}
      useCases={[
        "Réunions d'équipe spontanées",
        "Appels vidéo avec des amis ou collègues",
        "Sessions de travail collaboratif à distance",
        "Alternative gratuite à Zoom ou Google Meet pour des réunions ponctuelles",
      ]}
      techStack={["Next.js", "React", "TypeScript", "WebRTC", "Tailwind CSS"]}
      faq={[
        { question: "Faut-il créer un compte pour utiliser Visio ?", answer: "Non, aucune inscription n'est requise. Créez une salle et partagez le lien directement." },
        { question: "Combien de participants peut accueillir une salle ?", answer: "Le nombre de participants dépend de la capacité réseau des utilisateurs, mais l'application est optimisée pour les petits groupes." },
        { question: "Les visios sont-elles sécurisées ?", answer: "Oui, les communications utilisent WebRTC qui chiffre les flux audio/vidéo de bout en bout." },
      ]}
      images={["/placeholder-visio.webp", "/placeholder-visio-2.webp", "/placeholder-visio-3.webp"]}
      url="https://visio.arthurp.fr"
      githubUrl="https://github.com/arthur-pbty/visio"
    />
  );
}
