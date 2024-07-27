import FilterPane from '@/components/FilterPane';
import Footer from '@/components/Footer';
import { Nav } from '@/components/Nav';
import ShowPagination from '@/components/Pagination/ShowPagination';
import SearchPanel from '@/components/SearchPanel';
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
        <div className=''>
          <SearchPanel />
          <FilterPane />
          <ShowPagination searchKey='cars' textType='h4' />
          <ShowPagination searchKey='test' textType='p' />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
