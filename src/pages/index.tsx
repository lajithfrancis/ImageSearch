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
import Link from 'next/link';

const Home: NextPage<{ carsData: SearchList, searchKeyword: string }> = ({ carsData, searchKeyword = '' }) => {
  const [results, setResults] = useState<Photo[]>([])
  const [page, setPage] = useState(1);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    carsData?.photos && setResults([...carsData.photos])
    setPage(carsData.page)
    setSearchKey(searchKeyword)
  }, [carsData])
  const totalResults = carsData.total_results;
  const totalPages = Math.ceil(totalResults / 15);

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
          <ShowPagination searchKey={searchKey} textType='h4' page={page} totalPages={totalPages} />
          <ImageGallery results={results} />
          <Link className='flex mt-4' href={`/?page=${page + 1}`}>
            <button disabled={page >= totalPages} className='m-auto mb-12 px-16 py-2 rounded border border-gray-500'>Next page</button>
          </Link>
          <hr />
          <ShowPagination searchKey={searchKey} textType='p' page={page} totalPages={totalPages} />
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
  return { props: { carsData: response, searchKeyword: searchKey } }
}

export default Home;
