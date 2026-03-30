import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

interface FAQ {
  question: string;
  answer: string;
}

interface ProjectInfoPageProps {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  useCases?: string[];
  techStack?: string[];
  faq?: FAQ[];
  images: string[];
  url: string;
}

export default function ProjectInfoPage({
  title,
  description,
  longDescription,
  features,
  useCases,
  techStack,
  faq,
  images,
  url,
}: ProjectInfoPageProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description,
          url,
          isPartOf: {
            "@type": "WebSite",
            name: "ArthurP.fr",
            url: "https://arthurp.fr",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Accueil",
              item: "https://arthurp.fr",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: title,
              item: url,
            },
          ],
        }}
      />
      {faq && faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }}
        />
      )}
      <main className="mx-auto max-w-3xl px-4 py-12">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">&larr; Retour au hub</Link>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="mb-6 text-lg text-zinc-600">{description}</p>

        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-4">
            {images.map((img, idx) => (
              <div key={idx} className="min-w-75 h-48 relative rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100">
                <Image src={img} alt={title + ' screenshot ' + (idx+1)} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-[#e2d6c2] px-6 py-3 text-[#5a4a2e] font-medium hover:bg-[#d6bfa3] border border-[#d6bfa3] transition-colors"
        >
          {"Acc\u00e9der \u00e0 l\u2019outil"}
        </a>

        {longDescription && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-3">{"\u00c0 propos de "}{title}</h2>
            <p className="text-zinc-700 leading-relaxed">{longDescription}</p>
          </section>
        )}

        {features && features.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">{"Fonctionnalit\u00e9s principales"}</h2>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-zinc-700">
                  <span className="mt-1 text-[#5a4a2e]">{"\u2713"}</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {useCases && useCases.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">{"Cas d\u2019utilisation"}</h2>
            <ul className="space-y-2">
              {useCases.map((useCase, idx) => (
                <li key={idx} className="flex items-start gap-2 text-zinc-700">
                  <span className="mt-1">{"\u2192"}</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {techStack && techStack.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">{"Technologies utilis\u00e9es"}</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {faq && faq.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">{"Questions fr\u00e9quentes"}</h2>
            <div className="space-y-4">
              {faq.map((item, idx) => (
                <details key={idx} className="group rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4">
                  <summary className="cursor-pointer font-medium text-zinc-800 group-open:mb-2">
                    {item.question}
                  </summary>
                  <p className="text-zinc-600 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
