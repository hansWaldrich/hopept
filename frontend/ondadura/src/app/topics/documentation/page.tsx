"use client";

import { InstitutionCard } from "@/app/components/InstitutionCard";
import { topics } from "@/app/data/topics";
import { institutionsByTopic } from "@/app/data/institutions";

export default function Documentation() {
  const reason = "documentation";
  const topic = topics.find((t) => t.slug === reason);

  const institutions = institutionsByTopic[reason] || [];

  if (!topic) return <p className="p-6">notFound</p>;

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">{topic.title}</h1>
      {institutions.length === 0 ? (
        <p>noInstitutions</p>
      ) : (
        <div className="space-y-4">
          {institutions.map((inst, i) => (
            <InstitutionCard key={i} {...inst} />
          ))}
        </div>
      )}
    </main>
  );
}

export async function getStaticPaths() {
  const paths = topics.map((t) => ({ params: { slug: t.slug } }));
  return { paths, fallback: false };
}