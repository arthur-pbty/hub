import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReduceLink – Raccourcisseur d'URL gratuit | ArthurP.fr",
  description: "Transformez vos URLs longues en liens courts et mémorables. Gratuit, sans inscription, avec QR Code et statistiques.",
  alternates: { canonical: "https://arthurp.fr/projets/reducelink" },
  openGraph: {
    title: "ReduceLink – Raccourcisseur d'URL gratuit",
    description: "Transformez vos URLs longues en liens courts et mémorables. Gratuit, sans inscription.",
    url: "https://arthurp.fr/projets/reducelink",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return (
    <ProjectInfoPage
      title="ReduceLink"
      description="Transformez vos URLs longues en liens courts et mémorables. Gratuit, sans inscription, avec QR Code et statistiques."
      longDescription="ReduceLink est un raccourcisseur d'URL gratuit et sans inscription. Collez n'importe quelle URL longue et obtenez instantanément un lien court, facile à mémoriser et à partager. Chaque lien raccourci est accompagné d'un QR code généré automatiquement et de statistiques de clics en temps réel. L'outil respecte votre vie privée : aucune donnée personnelle n'est collectée, et aucun compte n'est requis."
      features={[
        "Raccourcissement d'URL instantané en un clic",
        "Génération automatique d'un QR code pour chaque lien",
        "Statistiques de clics en temps réel (nombre, provenance)",
        "Aucune inscription ni collecte de données personnelles",
        "Liens courts personnalisables (alias)",
        "Interface simple et rapide, utilisable sur mobile",
      ]}
      useCases={[
        "Raccourcir une URL longue pour la partager sur les réseaux sociaux",
        "Générer un QR code pour un lien à imprimer sur un support physique",
        "Suivre le nombre de clics sur un lien partagé",
        "Créer des liens mémorables pour des campagnes marketing",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"]}
      faq={[
        { question: "Les liens raccourcis expirent-ils ?", answer: "Non, les liens restent actifs indéfiniment tant que le service est en ligne." },
        { question: "Peut-on personnaliser le lien court ?", answer: "Oui, vous pouvez choisir un alias personnalisé pour votre lien court, sous réserve de disponibilité." },
        { question: "ReduceLink est-il vraiment gratuit ?", answer: "Oui, le service est 100% gratuit, sans publicité intrusive et sans inscription requise." },
      ]}
      images={["/placeholder-reducelink.webp", "/placeholder-reducelink-2.webp", "/placeholder-reducelink-3.webp"]}
      url="https://reducelink.arthurp.fr/"
      githubUrl="https://github.com/arthur-pbty/reducelink"
    />
  );
}
