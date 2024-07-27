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
import ImageGallery from '@/components/ImageGallery';

const Home: NextPage = () => {
  const [results, setResults] = useState<Photo[]>([])
  const [page, setPage] = useState(1);

  useEffect(() => {
    setResults([...cars.photos])
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Image Search</title>
      </Head>
      <main className="mx-auto">
        <Nav />
        <div className='grid'>
          <SearchPanel />
          <FilterPane />
          <ShowPagination searchKey='' textType='h4' page={page} setPage={setPage} />
          <ImageGallery results={results} />
          <button className='m-auto mb-12 px-16 py-2 rounded border border-gray-500'>Next page</button>
          <hr />
          <ShowPagination searchKey='' textType='p' page={page} setPage={setPage} />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
