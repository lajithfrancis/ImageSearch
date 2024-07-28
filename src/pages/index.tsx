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

const Home: NextPage<{ carsData: SearchList }> = ({ carsData }) => {
  const [results, setResults] = useState<Photo[]>([])
  const [page, setPage] = useState(1);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    // console.log('ssr data: ', carsData)
    setResults([...carsData.photos])
    setPage(carsData.page)
  }, [carsData])

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Image Search</title>
      </Head>
      <main className="mx-auto">
        <Nav />
        <div className='grid'>
          <SearchPanel setSearchKey={setSearchKey} />
          <FilterPane />
          <ShowPagination searchKey={searchKey} textType='h4' page={page} setPage={setPage} count={carsData.total_results} />
          <ImageGallery results={results} />
          <button className='m-auto mb-12 px-16 py-2 rounded border border-gray-500'>Next page</button>
          <hr />
          <ShowPagination searchKey={searchKey} textType='p' page={page} setPage={setPage} count={carsData.total_results} />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export async function getServerSideProps(context: {
  query: {
    page: string,
    perPage: string,
    searchKey: string
  }
}) {
  const { page = '1', perPage = '15', searchKey = 'car' }: {
    page: string,
    perPage: string,
    searchKey: string
  } = context.query;
  console.log(context.query)
  const fetchedData = await fetch(`https://simple-pexels-proxy.onrender.com/search?query=${searchKey}&per_page=${perPage}&page=${page}`)
  const response = await fetchedData.json();
  return { props: { carsData: response } }
}

export default Home;
