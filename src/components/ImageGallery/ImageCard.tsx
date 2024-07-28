import { Photo } from "@/app/interfaces/SearchList"
import { faCartShopping, faDownload, faPlus, faImages } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ImageCard({ index, item }: {
    index: number,
    item: Photo
}) {
    const iconStyleClasses = 'relative p-4 rounded bg-gray-800 text-white icon'
    return (
        <div key={index} className="masonry-brick">
            <img src={item.src.large} alt={item.alt} className="image" />
            <p className="text-sm text-white relative left-2 bottom-8 w-fit name"><b>Photographer: </b>{item.photographer}</p>
            <div className="icon_list">
                <FontAwesomeIcon className={iconStyleClasses} icon={faCartShopping} />
                <a href={item.src.original} download={item.id}><FontAwesomeIcon className={iconStyleClasses} icon={faDownload} /></a>
                <FontAwesomeIcon className={iconStyleClasses} icon={faPlus} />
                <FontAwesomeIcon className={iconStyleClasses} icon={faImages} />
            </div>
        </div>
    )
}