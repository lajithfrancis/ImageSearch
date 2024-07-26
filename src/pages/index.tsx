import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Image Search</title>
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">Image Search</h1>
        Add your search and image listing components here
      </main>
    </div>
  );
};

export default Home;
