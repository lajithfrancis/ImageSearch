import { Photo } from "@/app/interfaces/SearchList"
import { faCartShopping, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function ImageCard({ index, item }: {
    index: number,
    item: Photo
}) {
    return (
        <div key={index} className="masonry-brick">
            <img src={item.src.large} alt={item.alt} className="image" />
            <p className="text-sm text-white relative left-2 bottom-8 w-fit"><b>Photographer: </b>{item.photographer}</p>
            <div>
                <FontAwesomeIcon className="relative p-4 rounded bg-gray-800 text-green-500" icon={faCartShopping} />
                <FontAwesomeIcon className="relative p-4 rounded bg-gray-800 text-green-500" icon={faDownload} />
                <FontAwesomeIcon className="relative p-4 rounded bg-gray-800 text-green-500" icon={faCartShopping} />
                <FontAwesomeIcon className="relative p-4 rounded bg-gray-800 text-green-500" icon={faCartShopping} />
            </div>
        </div>
    )
}