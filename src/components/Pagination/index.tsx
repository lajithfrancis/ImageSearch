import React, { useState, MouseEvent, ChangeEvent, MouseEventHandler } from 'react';
import Link from 'next/link';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pagination({ page, isHidden, totalPages }: {
    page: number,
    isHidden: boolean,
    totalPages: number
}) {
    const [pageNumber, setPageNumber] = useState('')
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPageNumber(e.target.value);
    }
    const handleOnClick = () => {
        setPageNumber('')
    }
    const btnStyleClasses = 'px-2 border rounded border-slate-300 hover:border-slate-400'
    return (
        <div className='mt-4 flex gap-4 items-center'>
            <div className='flex gap-4 items-center'>
                <p>Page {page} of {totalPages}</p>
                <Link href={`/?page=${page - 1}`}>
                    <button disabled={page <= 1} className={btnStyleClasses}><FontAwesomeIcon icon={faAngleLeft} /></button>
                </Link>
                <Link href={`/?page=${page + 1}`}>
                    <button disabled={page >= totalPages} className={btnStyleClasses}><FontAwesomeIcon icon={faAngleRight} /></button>
                </Link>
            </div>
            <div className='flex gap-2 items-center'>
                <p className='ml-4'>Go to page</p>
                <input onChange={handleOnChange} value={pageNumber} className='w-14 border' />
                <Link href={`/?page=${pageNumber}`}>
                    <button onClick={handleOnClick} className={btnStyleClasses}>{isHidden ? <FontAwesomeIcon icon={faAngleRight} /> : 'Go'}</button>
                </Link>

            </div>

        </div>
    );
}
