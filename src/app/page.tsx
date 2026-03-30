
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "LazyBot",
    description: "Un bot Discord configurable avec dashboard web, inspiré de Draftbot.",
    image: "/placeholder-lazybot.webp", // À remplacer par une capture plus tard
    url: "https://lazybot.arthurp.fr",
    infoUrl: "/projets/lazybot"
  },
  {
    title: "QRCode",
    description: "Générateur de QR codes personnalisés, partageable par URL, sans téléchargement d'image.",
    image: "/placeholder-qrcode.webp",
    url: "https://qrcode.arthurp.fr",
    infoUrl: "/projets/qrcode"
  },
  {
    title: "QCU Physique-Chimie",
    description: "Révise la physique-chimie avec plus de 150 QCU configurables et corrigés.",
    image: "/placeholder-qcu.webp",
    url: "https://qcu.arthurp.fr",
    infoUrl: "/projets/qcu"
  },
  {
    title: "ReduceLink",
    description: "Transformez vos URLs longues en liens courts et mémorables. Gratuit, sans inscription, avec QR Code et statistiques.",
    image: "/placeholder-reducelink.webp",
    url: "https://reducelink.arthurp.fr/",
    infoUrl: "/projets/reducelink"
  },
  {
    title: "Linktree",
    description: "Tous mes réseaux et liens importants, centralisés pour ma communauté.",
    image: "/placeholder-linktree.webp",
    url: "https://links.arthurp.fr",
    infoUrl: "/projets/links"
  },
  {
    title: "Learn",
    description: "Des réponses claires à des questions populaires sur de nombreux sujets.",
    image: "/placeholder-learn.webp",
    url: "https://learn.arthurp.fr",
    infoUrl: "/projets/learn"
  },
  {
    title: "Sudoku Generator & Solver",
    description: "Génère, résout et vérifie des grilles de sudoku de plusieurs niveaux de difficulté.",
    image: "/placeholder-sudoku.webp",
    url: "https://sudoku.arthurp.fr",
    infoUrl: "/projets/sudoku"
  }
  ,
  {
    title: "Clock",
    description: "Affiche l’heure en temps réel, analogique ou numérique, avec personnalisation du thème.",
    image: "/placeholder-clock.webp",
    url: "https://clock.arthurp.fr",
    infoUrl: "/projets/clock"
  }
    ,
    {
      title: "FormCraft",
      description: "Générez des formulaires sans inscription, une alternative à Google Forms. Simple, rapide et privé.",
      image: "/placeholder-formcraft.webp",
      url: "https://form.arthurp.fr/",
      infoUrl: "/projets/formcraft"
  },
  {
    title: "FocusPomodoro",
    description: "Boostez votre productivité avec la technique Pomodoro : sessions de focus, pauses, statistiques et gestion des tâches.",
    image: "/placeholder-pomodoro.webp",
    url: "https://pomodoro.arthurp.fr",
    infoUrl: "/projets/pomodoro"
  },
  {
    title: "Visio",
    description: "Créez une salle de visioconférence en un clic et partagez le lien avec vos participants. Aucune inscription requise.",
    image: "/placeholder-visio.webp",
    url: "https://visio.arthurp.fr",
    infoUrl: "/projets/visio"
  },
  {
    title: "Les Aventures de Doudou",
    description: "Un album photo interactif racontant les merveilleuses aventures de Doudou, avec vue chronologique ou par albums.",
    image: "/placeholder-doudou.webp",
    url: "https://doudou.arthurp.fr",
    infoUrl: "/projets/doudou"
  },
  {
    title: "Portfolio ArthurP",
    description: "Le site personnel d'Arthur : développeur passionné par l'auto-hébergement, navigateur de haut niveau en voile.",
    image: "/placeholder-portfolio.webp",
    url: "https://portfolio.arthurp.fr",
    infoUrl: "/projets/portfolio"
  },
  {
    title: "Moon Phases",
    description: "Explorez les phases lunaires en temps réel, consultez le calendrier, la prochaine pleine lune, un simulateur et un quiz.",
    image: "/placeholder-moon.webp",
    url: "https://moon.arthurp.fr",
    infoUrl: "/projets/moon"
  },
  {
    title: "Calculatrice",
    description: "Calculatrice en ligne gratuite avec modes simple et scientifique, historique des calculs et thème sombre/clair.",
    image: "/placeholder-calculatrice.webp",
    url: "https://calculatrice.arthurp.fr",
    infoUrl: "/projets/calculatrice"
  },
  {
    title: "Chrono",
    description: "Chronomètre précis à la milliseconde et minuteur flexible avec enregistrement des tours et raccourcis clavier.",
    image: "/placeholder-chrono.webp",
    url: "https://chrono.arthurp.fr",
    infoUrl: "/projets/chrono"
  },
  {
    title: "BlocNote",
    description: "Application de prise de notes en ligne : créez, recherchez et organisez vos notes avec mode sombre, sans inscription.",
    image: "/placeholder-blocnote.webp",
    url: "https://blocnote.arthurp.fr",
    infoUrl: "/projets/blocnote"
  },
  {
    title: "ImprimerSudoku",
    description: "Générez 6 grilles de sudoku imprimables sur feuille A4 avec solutions. 4 niveaux de difficulté, en un clic.",
    image: "/placeholder-imprimersudoku.webp",
    url: "https://imprimersudoku.arthurp.fr",
    infoUrl: "/projets/imprimersudoku"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <main className="mx-auto flex max-w-5xl flex-col items-center px-4 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Le hub d&apos;ArthurP</h1>
        <p className="mb-10 max-w-2xl text-center text-lg text-zinc-600">
          Découvre tous mes outils, projets et ressources en ligne : bots Discord, générateurs, QCM, linktree et plus encore. Un point d’accès unique pour tout ce que je développe et partage.
        </p>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="h-40 w-full object-cover bg-zinc-200"
              />
              <div className="flex flex-1 flex-col p-5">
                <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
                <p className="mb-4 text-zinc-600 flex-1">{project.description}</p>
                <div className="mt-auto flex gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#e2d6c2] px-4 py-2 text-[#5a4a2e] font-medium hover:bg-[#d6bfa3] transition-colors border border-[#d6bfa3]"
                  >
                    Accéder à l’outil
                  </a>
                  <Link
                    href={project.infoUrl}
                    className="rounded-lg border border-[#e2d6c2] px-4 py-2 text-[#5a4a2e] font-medium hover:bg-[#f3ede6] transition-colors"
                  >
                    Plus d’info
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
