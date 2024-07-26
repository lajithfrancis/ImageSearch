import Footer from '@/components/Footer';
import { Nav } from '@/components/Nav';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Image Search</title>
      </Head>
      <main className="mx-auto">
        <Nav />
        Add your search and image listing components here
        <Footer />
      </main>
    </div>
  );
};

export default Home;
