import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QRCode – Générateur de QR codes personnalisés | ArthurP.fr",
  description: "Générateur de QR codes personnalisés, partageable par URL, sans téléchargement d'image. Configurez vos QR codes comme vous le souhaitez.",
  alternates: { canonical: "https://arthurp.fr/projets/qrcode" },
  openGraph: {
    title: "QRCode – Générateur de QR codes personnalisés",
    description: "Générateur de QR codes personnalisés, partageable par URL, sans téléchargement d'image.",
    url: "https://arthurp.fr/projets/qrcode",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function QRCodeInfo() {
  return (
    <ProjectInfoPage
      title="QRCode"
      description="Générateur de QR codes personnalisés, partageable par URL, sans téléchargement d'image. Configurez vos QR codes comme vous le souhaitez."
      longDescription="Ce générateur de QR codes en ligne vous permet de créer des codes QR personnalisés en quelques secondes. Contrairement aux outils classiques, chaque QR code généré est accessible via une URL unique que vous pouvez partager directement, sans avoir à télécharger d'image. Idéal pour les professionnels, les événements ou le quotidien, l'outil offre des options de personnalisation avancées : couleurs, taille, correction d'erreur et contenu embarqué."
      features={[
        "Génération instantanée de QR codes à partir de texte, URL ou données",
        "Partage via URL unique sans besoin de télécharger l'image",
        "Personnalisation des couleurs (premier plan et arrière-plan)",
        "Choix du niveau de correction d'erreur (L, M, Q, H)",
        "Téléchargement optionnel en PNG haute résolution",
        "Interface responsive utilisable sur mobile et desktop",
      ]}
      useCases={[
        "Créer un QR code pour partager un lien Wi-Fi lors d'un événement",
        "Générer un QR code pour une carte de visite numérique",
        "Partager un lien rapidement sur un support imprimé (flyer, affiche)",
        "Intégrer un QR code dans une présentation ou un document",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
      faq={[
        { question: "Les QR codes générés expirent-ils ?", answer: "Non, les QR codes contiennent directement les données encodées. Tant que l'URL ou le texte cible existe, le QR code fonctionne indéfiniment." },
        { question: "Peut-on personnaliser les couleurs du QR code ?", answer: "Oui, vous pouvez choisir la couleur du premier plan et de l'arrière-plan pour adapter le QR code à votre charte graphique." },
        { question: "Faut-il créer un compte ?", answer: "Non, aucun compte ni inscription n'est nécessaire. L'outil est 100% gratuit et accessible immédiatement." },
      ]}
      images={["/placeholder-qrcode.webp", "/placeholder-qrcode-2.webp", "/placeholder-qrcode-3.webp"]}
      url="https://qrcode.arthurp.fr"
      githubUrl="https://github.com/arthur-pbty/qrcode"
    />
  );
}
