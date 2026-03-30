import Link from "next/link";

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-white w-full">
      <main className="max-w-2xl mx-auto py-12 px-4 text-zinc-900">
        <Link href="/" className="mb-6 inline-block">
          <button className="rounded-lg bg-[#e2d6c2] px-4 py-2 text-[#5a4a2e] font-medium hover:bg-[#d6bfa3] border border-[#d6bfa3] transition-colors">← Retour à l&apos;accueil</button>
        </Link>
        <h1 className="text-2xl font-bold mb-4">Politique de confidentialité</h1>
        <p className="mb-2">Aucune donnée personnelle n’est collectée à des fins commerciales. Les outils proposés peuvent utiliser des cookies techniques pour le bon fonctionnement du site.</p>
        <p className="mb-2">Aucune information n’est transmise à des tiers. Pour toute question, contactez-moi à contact [at] arthurp.fr.</p>
      </main>
    </div>
  );
}
