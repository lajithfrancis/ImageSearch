import { faMagnifyingGlass, faAngleDown, faImage, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { debounce } from '@/utils/debounce';
import { Photo } from '@/app/interfaces/SearchList';

export default function SearchPanel({ imageDispatch }: {
    imageDispatch: React.Dispatch<{
        type: string;
        payload: Photo[];
    }>
}) {
    const router = useRouter();
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        debouncedSearch(e.target.value)

    }

    const debouncedSearch = debounce((value) => {
        console.log('searching: ', value);
        if (value)
            imageDispatch({
                type: 'SET_LOADING',
                payload: []
            })
            router.push(`/?searchKey=${value}`);
    }, 500)

    return (
        <div className="search_panel">
            <div className="dropdown">
                <div className='category'>
                    <FontAwesomeIcon className='h-6 w-12' icon={faImage} />All images
                </div>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className="search_input">
                <FontAwesomeIcon className='h-6 w-12' icon={faMagnifyingGlass} />
                <input type="text" placeholder="Search" onChange={handleChange} />
            </div>
            <div className="image_search">
                <FontAwesomeIcon className='h-6 w-12' icon={faCamera} />
                Search by image
            </div>

        </div>
    )
}
