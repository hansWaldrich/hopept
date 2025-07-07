import { topics } from './data/topics';
import { TopicCard } from './components/TopicCard';

export default function Home() {

  return (
    <div>
      <main className="p-8">        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 text-center">
          {topics.map((topic) => (
            <TopicCard key={topic.slug} slug={topic.slug} title={topic.title} />
          ))}
        </div>
      </main>      
    </div>
  );
}
