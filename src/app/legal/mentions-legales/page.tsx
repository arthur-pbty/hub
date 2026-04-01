import Link from "next/link";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white w-full">
      <main className="max-w-2xl mx-auto py-12 px-4 text-zinc-900">
        <Link href="/" className="mb-6 inline-block">
          <button className="rounded-lg bg-[#e2d6c2] px-4 py-2 text-[#5a4a2e] font-medium hover:bg-[#d6bfa3] border border-[#d6bfa3] transition-colors">← Retour à l&apos;accueil</button>
        </Link>
        <h1 className="text-2xl font-bold mb-4">Mentions légales</h1>
        <p className="mb-2">Conformément à la loi, voici les informations légales du site arthurp.fr.</p>
        <ul className="mb-4 list-disc pl-6">
          <li><strong>Éditeur :</strong> Arthur P.</li>
          <li><strong>Contact :</strong> contact.arthurp.fr ou contact@arthurp.fr</li>
        </ul>
        <p className="text-zinc-500 text-sm">Ce site est un projet personnel, sans but commercial.</p>
      </main>
    </div>
  );
}
