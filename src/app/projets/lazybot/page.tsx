import ProjectInfoPage from "@/components/ProjectInfoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LazyBot – Bot Discord configurable | ArthurP.fr",
  description: "Un bot Discord configurable avec dashboard web, inspiré de Draftbot. Gérez votre serveur, personnalisez les fonctionnalités et profitez d'une expérience unique.",
  alternates: { canonical: "https://arthurp.fr/projets/lazybot" },
  openGraph: {
    title: "LazyBot – Bot Discord configurable",
    description: "Un bot Discord configurable avec dashboard web, inspiré de Draftbot.",
    url: "https://arthurp.fr/projets/lazybot",
    siteName: "ArthurP.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function LazyBotInfo() {
  return (
    <ProjectInfoPage
      title="LazyBot"
      description="Un bot Discord configurable avec dashboard web, inspiré de Draftbot. Gérez votre serveur, personnalisez les fonctionnalités et profitez d'une expérience unique."
      longDescription="LazyBot est un bot Discord complet pensé pour simplifier la gestion de votre serveur. Grâce à son dashboard web intuitif, vous pouvez configurer chaque fonctionnalité sans toucher à une seule ligne de commande. Modération automatique, messages de bienvenue, rôles réactifs, logs détaillés… tout est paramétrable en quelques clics. Inspiré de bots populaires comme Draftbot, LazyBot se distingue par sa simplicité d'utilisation et sa flexibilité."
      features={[
        "Dashboard web complet pour configurer le bot sans commandes",
        "Système de modération automatique (anti-spam, anti-raid, filtres de mots)",
        "Messages de bienvenue et d'au revoir personnalisables",
        "Attribution automatique de rôles via réactions",
        "Logs détaillés de toutes les actions du serveur",
        "Commandes personnalisées créées depuis le dashboard",
        "Système de niveaux et d'expérience pour les membres",
      ]}
      useCases={[
        "Gérer un serveur communautaire avec des centaines de membres",
        "Automatiser la modération pour gagner du temps",
        "Personnaliser l'accueil des nouveaux membres",
        "Suivre l'activité du serveur avec des logs centralisés",
      ]}
      techStack={["Node.js", "Discord.js", "React", "Next.js", "MongoDB", "Tailwind CSS"]}
      faq={[
        { question: "LazyBot est-il gratuit ?", answer: "Oui, LazyBot est entièrement gratuit. Toutes les fonctionnalités sont accessibles sans abonnement ni paiement." },
        { question: "Comment ajouter LazyBot à mon serveur ?", answer: "Il suffit de se rendre sur lazybot.arthurp.fr et de cliquer sur le bouton d'invitation. Vous serez redirigé vers Discord pour autoriser le bot sur votre serveur." },
        { question: "Peut-on configurer le bot sans connaissances techniques ?", answer: "Absolument. Le dashboard web est conçu pour être accessible à tous, avec une interface visuelle intuitive." },
      ]}
      images={["/placeholder-lazybot.webp", "/placeholder-lazybot-2.webp", "/placeholder-lazybot-3.webp"]}
      url="https://lazybot.arthurp.fr"
    />
  );
}
