import ProjectInfoPage from '../../../components/ProjectInfoPage';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sudoku Generator & Solver – Générez et résolvez des sudokus | ArthurP.fr",
  description: "Générez des grilles de sudoku de plusieurs niveaux de difficulté, résolvez-les, vérifiez vos solutions et entraînez-vous.",
  alternates: { canonical: "https://arthurp.fr/projets/sudoku" },
  openGraph: {
    title: "Sudoku Generator & Solver",
    description: "Générez des grilles de sudoku de plusieurs niveaux de difficulté, résolvez-les et entraînez-vous.",
    url: "https://arthurp.fr/projets/sudoku",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function SudokuProjectPage() {
  return (
    <ProjectInfoPage
      title="Sudoku Generator & Solver"
      description="Générez des grilles de sudoku de plusieurs niveaux de difficulté, résolvez-les, vérifiez vos solutions et entraînez-vous."
      longDescription="Sudoku Generator & Solver est un outil en ligne complet pour les amateurs de sudoku. Générez des grilles aléatoires avec plusieurs niveaux de difficulté (facile, moyen, difficile, expert), résolvez-les directement dans votre navigateur ou utilisez le solveur automatique pour découvrir la solution. L'outil permet également de vérifier vos réponses en temps réel et de vous entraîner à votre rythme. Aucune installation nécessaire, tout se passe dans le navigateur."
      features={[
        "Génération de grilles aléatoires avec 4 niveaux de difficulté",
        "Solveur automatique qui trouve la solution en quelques secondes",
        "Vérification en temps réel des erreurs pendant la résolution",
        "Interface intuitive avec navigation au clavier",
        "Minuteur intégré pour chronométrer vos performances",
        "Fonctionne hors ligne après le premier chargement",
      ]}
      useCases={[
        "S'entraîner au sudoku avec des grilles de difficulté progressive",
        "Vérifier la solution d'un sudoku commencé sur papier",
        "Passer le temps avec un jeu de logique stimulant",
        "Apprendre les techniques de résolution de sudoku",
      ]}
      techStack={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
      faq={[
        { question: "Combien de grilles différentes peut-on générer ?", answer: "Le générateur produit des grilles aléatoires à chaque fois, offrant une diversité quasi-infinie de puzzles." },
        { question: "Le solveur fonctionne-t-il sur toutes les grilles ?", answer: "Oui, le solveur utilise un algorithme de backtracking capable de résoudre n'importe quelle grille de sudoku valide." },
        { question: "Peut-on jouer sur téléphone ?", answer: "Oui, l'interface est entièrement responsive et optimisée pour les écrans tactiles." },
      ]}
      images={["/placeholder-sudoku.webp", "/placeholder-sudoku-2.webp", "/placeholder-sudoku-3.webp"]}
      url="https://sudoku.arthurp.fr"
    />
  );
}