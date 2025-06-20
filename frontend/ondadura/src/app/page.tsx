import Head from 'next/head';
import Header from './components/Header';
import CentralNews from './components/central-news';

export default function Home() {
  return (
    <div>
      <Head><title>Onda Dura</title></Head>
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold">Bem-vindo à Onda Dura</h1>
        <p className="mt-4 text-lg">Uma igreja bíblica, acolhedora e extraordinária</p>
        <div className="p-8">
          <CentralNews />
        </div>
      </main>      
    </div>
  );
}
