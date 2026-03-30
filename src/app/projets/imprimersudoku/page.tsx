import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ImprimerSudoku – Générateur de sudoku imprimable | ArthurP.fr",
  description: "Générez 6 grilles de sudoku sur une feuille A4 avec leurs solutions. Choisissez votre niveau de difficulté et imprimez en un clic.",
  alternates: { canonical: "https://arthurp.fr/projets/imprimersudoku" },
  openGraph: {
    title: "ImprimerSudoku – Générateur de sudoku imprimable",
    description: "Imprimez 6 sudokus par page avec solutions. 4 niveaux de difficulté, génération instantanée.",
    url: "https://arthurp.fr/projets/imprimersudoku",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ImprimerSudokuInfo() {
  return (
    <ProjectInfoPage
      title="ImprimerSudoku"
      description="Générez 6 grilles de sudoku sur une feuille A4 avec leurs solutions. Choisissez votre niveau et imprimez en un clic."
      longDescription="ImprimerSudoku est l'outil idéal pour imprimer des grilles de sudoku à la maison ou en classe. En choisissant votre niveau de difficulté parmi quatre options (Facile, Moyen, Difficile, Expert), l'application génère instantanément 6 grilles uniques disposées sur une feuille A4, avec leurs solutions complètes au bas de la page. Un simple clic sur 'Imprimer' lance l'impression directement depuis le navigateur. Parfait pour les enfants, les adultes en quête de divertissement ou les enseignants."
      features={[
        "6 grilles de sudoku générées automatiquement par feuille A4",
        "4 niveaux de difficulté : Facile, Moyen, Difficile, Expert",
        "Solutions incluses sur la page d'impression",
        "Impression en un clic directement depuis le navigateur",
        "Grilles uniques à chaque génération",
        "Gratuit et sans inscription",
      ]}
      useCases={[
        "Imprimer des sudokus pour les enfants ou la famille",
        "Préparer des exercices pour la classe",
        "Avoir des grilles disponibles hors ligne (papier)",
        "Varier les niveaux de difficulté selon son humeur",
      ]}
      techStack={["React", "TypeScript", "Tailwind CSS", "Algorithme de génération de sudoku"]}
      faq={[
        { question: "Les grilles sont-elles toujours différentes ?", answer: "Oui, chaque clic sur un niveau génère 6 nouvelles grilles uniques avec un algorithme de génération aléatoire." },
        { question: "Les solutions sont-elles toujours incluses ?", answer: "Oui, les solutions des 6 grilles sont incluses dans la zone d'impression en bas de la feuille A4." },
        { question: "Puis-je imprimer sans les solutions ?", answer: "Actuellement, les solutions sont automatiquement incluses. Vous pouvez les masquer en les repliant si vous imprimez en recto-verso." },
      ]}
      images={["/placeholder-imprimersudoku.webp", "/placeholder-imprimersudoku-2.webp", "/placeholder-imprimersudoku-3.webp"]}
      url="https://imprimersudoku.arthurp.fr"
    />
  );
}
