import FilterPane from '@/components/FilterPane';
import Footer from '@/components/Footer';
import { Nav } from '@/components/Nav';
import ShowPagination from '@/components/Pagination/ShowPagination';
import SearchPanel from '@/components/SearchPanel';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState, useReducer } from 'react';
import cars from '@/app/data/cars'
import { Photo, SearchList } from '@/app/interfaces/SearchList';
import ImageGallery from '@/components/ImageGallery';
import Link from 'next/link';
import { ImageReducer } from '@/reducer/ImageReducer';

export interface Image { isLoading: boolean; data: Photo[]; }

const Home: NextPage<{ carsData: SearchList, searchKeyword: string }> = ({ carsData, searchKeyword = '' }) => {
  const [results, setResults] = useState<Photo[]>([])
  const [page, setPage] = useState(1);
  const [searchKey, setSearchKey] = useState('');
  let initialData: Image = {
    isLoading: false,
    data: carsData?.photos
  }
  const [photos, dispatch] = useReducer(ImageReducer, initialData)
  console.log('loading status: ', photos.isLoading)
  useEffect(() => {
    carsData?.photos && setResults([...carsData.photos])
    carsData?.photos && dispatch({
      type: 'SET_PHOTOS',
      payload: carsData.photos
    })
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
        {photos.isLoading && 'Loading...'}
        <div className='grid'>
          <SearchPanel imageDispatch={dispatch} />
          <FilterPane />
          <ShowPagination searchKey={searchKey} textType='h4' page={page} totalPages={totalPages} />
          <ImageGallery results={photos.data} />
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
  // const fetchedData = await fetch(`https://simple-pexels-proxy.onrender.com/search?query=${searchKey}&per_page=${perPage}&page=${page}`)
  // const response = await fetchedData.json();
  const response = cars
  return { props: { carsData: response, searchKeyword: searchKey } }
}

export default Home;
