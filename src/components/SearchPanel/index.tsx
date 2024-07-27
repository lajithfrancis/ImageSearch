import { faMagnifyingGlass, faAngleDown, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

export default function SearchPanel() {
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
                <input type="text" placeholder="Search" />
            </div>
            <div className="image_search">
                Search by image
            </div>

        </div>
    )
}
