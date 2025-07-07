import Link from 'next/link';

type TopicCardProps = {
  slug: string;
  title: string;
};

export function TopicCard({ slug, title }: TopicCardProps) {
  return (
    <Link href={`/topics/${slug}`}>
      <div className="topic-card">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </Link>
  );
}