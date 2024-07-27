import { faMagnifyingGlass, faAngleDown, faImage, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import { ChangeEvent } from 'react';

export default function SearchPanel({ setSearchKey }: { setSearchKey: React.Dispatch<React.SetStateAction<string>> }) {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchKey(e.target.value)
    }

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
