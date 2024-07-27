import FilterPane from '@/components/FilterPane';
import Footer from '@/components/Footer';
import { Nav } from '@/components/Nav';
import ShowPagination from '@/components/Pagination/ShowPagination';
import SearchPanel from '@/components/SearchPanel';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import cars from '@/app/data/cars'
import { Photo, SearchList } from '@/app/interfaces/SearchList';

const Home: NextPage = () => {
  const [results, setResults] = useState<Photo[]>([])
  useEffect(() => {
    console.log('called', cars)
    setResults([...cars.photos])
  }, [])
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
          <ShowPagination searchKey='' textType='h4' />
          <ShowPagination searchKey='' textType='p' />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
